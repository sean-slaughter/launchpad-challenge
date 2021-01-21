import React from 'react';

const Repo = ({repo}) => {
    console.log(repo)
    return (
        <div>
            {repo.name}
            {repo.url}
            {repo.github_url}
            {repo.icon}
        </div>
    );
}

export default Repo;
