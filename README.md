# TODO list

## Descrição
Aplicativo de lista de tarefas desenvolvido para ajudar usuários a organizar e gerenciar suas atividades diárias de forma eficiente. Inclui funcionalidades como criação de tarefas, priorização e acompanhamento do progresso.

## Requisitos

Necessario ter o Java e o Maven instalados na máquina. <br>

* [Java 17](https://www.oracle.com/br/java/technologies/downloads/#java17)
* [Maven 3.9.5](https://maven.apache.org/download.cgi)
* PostgreSQL

## Práticas adotadas
* SOLID
* API REST
* Consultas com Spring Data JPA
* Injeção de dependências
* Geração automática do Swagger

## Como compilar e executar a aplicação

Após a instalação dos requisitos: siga os passos abaixo:

1. Clone o repositório.
2. Abra o terminal na pasta raiz do projeto.
3. Execute o comando para iniciar a aplicação:

    ```bash
    mvn spring-boot:run
    ```
## Endpoints

* Criar Produto<br>
POST /todos

* Listar Produtos<br>
GET /todos

* Buscar Produto por ID<br>
GET /todos

* Atualizar Produto<br>
PUT /todos

* Excluir Produto<br>
DELETE /todos/{id}
