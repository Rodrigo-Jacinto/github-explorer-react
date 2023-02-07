import React from "react";
import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import "../styles/repository.scss";

interface Repository {
  id: string;
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repositories.map((repoItem: Repository) => {
          return <RepositoryItem key={repoItem.id} repository={repoItem} />;
        })}
      </ul>
    </section>
  );
}
