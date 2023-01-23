""" Small script to keep the repo data up to date 😁"""
import os
import json
import sys
import requests

GITHUB_ENDPOINT = 'https://api.github.com/users/victoravtr/repos'
README_ENDPOINT = 'https://raw.githubusercontent.com/victoravtr/${repoName}/master/README.md'


def get_readme(repo_name):
    """ Get the README.md from the github repo

    Args:
        repo_name (str): The name of the repo

    Returns:
        dict: The response from the github api
    """
    return requests.get(README_ENDPOINT.replace('${repoName}', repo_name)).text


def save_readme(repo_name, data):
    """ Save the README.md to the local filesystem

    Args:
        repo_name (str): The name of the repo
        data (dict): The data to save
    """
    base_path = 'lib/docs/'
    with open(f"{base_path}{repo_name}/index.md", 'w+', encoding='utf8') as writer:
        writer.write(data)


if __name__ == '__main__':
    # Get latest repo data form github
    githubRepoData = requests.get(GITHUB_ENDPOINT).json()
    # Get the repo data we have saved locally
    with open('lib/data/repos.json', 'r+', encoding='utf8') as reader:
        localRepoData = json.load(reader)
    # remove repo "victorav.me" from both lists, if not there will be an infinite loop 
    # where githubRepoDatais always different from localRepoData
    githubRepoData = [repo for repo in githubRepoData if repo['name'] != 'victorav.me']
    localRepoData = [repo for repo in localRepoData if repo['name'] != 'victorav.me']
    # If there are no changes, stop
    if githubRepoData == localRepoData:
        sys.exit(0)
    # If there are changes, save the new data
    with open('lib/data/repos.json', 'w+', encoding='utf8') as writer:
        writer.write(json.dumps(githubRepoData))
    # check if the folder exists
    if not os.path.exists('lib/docs'):
        os.mkdir('lib/docs')
    readmes = os.listdir('lib/docs/')
    # For each repo, check if it exists in the local storage.
    # Each repo has a folder
    for repo in githubRepoData:
        # if not, save it
        if f"{repo['name']}" not in readmes:
            # repo doesnt have a folder, create it and save_readme there
            os.mkdir(f"lib/docs/{repo['name']}")
            save_readme(repo['name'], get_readme(repo['name']))
        else:
            fileModificationDate = os.path.getmtime(f"lib/docs/{repo['name']}/index.md")
            # convert repo['pushed_at'] to unix timestamp
            repo_last_modified = int(repo['pushed_at'].replace('-', '').replace('T', '').replace(':', '').replace('Z', ''))
            if fileModificationDate < repo_last_modified:
                save_readme(repo['name'], get_readme(repo['name']))
