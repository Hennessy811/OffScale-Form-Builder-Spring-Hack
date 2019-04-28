# OffScale-Form-Builder-Spring-Hack
Spring Hack 


# Structure

<ol type="1" style="font-size: x-large;">
  <li> <a href="#about">About project</a>
  <li> <a href="#solution">Solution</a>
<ol type="a" style="font-size: large;">
  <li> <a href="#frontend">Frontend</a>
</ol>
  <li> <a href="#installation">Installation</a>
  <li> <a href="#finally">Finally</a>
  <li> <a href="#team">Team</a>
</ol>

# About
We are the **IBI SOLUTION** team and we solved the task of **creating tools for designing and creating web applications with an intuitive drag-and-drop interface**.

We present the project Startblock - web application without a server (client side)

We solved the following problem - **creating a web application without a server, consisting of 3 parts: SQL designer, OpenApi designer, Form Builder**

# Solution

Our solution is the implementation of a web application that allows you to create forms. The interaction of customers of our service is carried out through a web application.

Our product consists of the following parts:

* <a href="https://github.com/Hennessy811/OffScale-Form-Builder-Spring-Hack/blob/master/sql%26yaml/localstorage.js">Local storage </a>;

* <a href="https://github.com/Hennessy811/OffScale-Form-Builder-Spring-Hack/blob/master/sql%26yaml/sql_yaml_generator.js">OpenApi designer generating YAML</a>;

* <a href="https://github.com/Hennessy811/OffScale-Form-Builder-Spring-Hack/tree/master/src">Angular web application for creating forms</a>;

Script Option:
1. Create a form and json generic (format thrown off above)
2. Call save_at_local_storage (a_key, a_text), in a_key we transfer the name of the form <FORMNAME>, to a_text received json
3. Generate sql for a specific form:
     - call generateSQL (a_form_json), instead of a_form_json, we pass get_from_local_storage (<FORMNAME>) - our saved json
4. Save the resulting sql code in localstorage (again, call save_at_local_storage (a_key, a_text), only the key is different already)
5. Then we can pull out both json and sql, we can delete some by key (remove_key_from_local_storage (a_key)), or delete everything altogether by cleaning local storage (clear_local_storage ())

Next we look at the technical implementation of our project.

# Frontend

When you start the site, you will see the following interface:

![Screenshot](a49e1022-55a2-4e1c-9c42-322ab7c938a7.jpg)

A detailed description of how to run this solution can be found here. - <a href="#installation">“Installation”</a> section.

Описание фронта !!!

# Installation
Necessary tools to start a project:
1. Java >=1.8
2. Kotlin
3. Circom
4. Snarkjs
5. React
6. PostgreSQL
ОПИСАНИЕ ИНСТРУМЕНТОВ!

To install packages locally, use the following commands:
   ```bash
    npm install -g circom
    npm install -g snarkjs
   ```
   ОПИСАНИЕ КОМАНД!
# Finally

During the hackathon:
ОПИСАНИЕ ЗАДАЧ!
- Мы реализовали веб приложение, позволяющее создавать заявку на покупку и продажу
- Создали смарт-контракт, который позволяет нам регулировать взаимоотношение между клиентами нашего сервиса
- Создали сервер, который общается с веб приложением и блокчейном
- Создали базу данных, которая позволяет нам в автоматическом режиме искать совпадения между заявками и создавать стакан заявок

Solved problems:
ОПИСАНИЕ ПРОБЛЕМ!
- Проблема децентрализованной биржы, когда заявку можно отменить после мэтчинга, "добавив газу"
- Проблема нечестного мэтчинга при централизованном сервере

Refinement options:
ОПИСАНИЕ ДАЛЬНЕШЕЙ РАБОТЫ!
- Добавление zero-knowledge proof для скрытия цены/объема в запросах пользователей

# Team

- Ivan Fedorov - fedorov@yandex.ru, was engaged in a database, presentation
- Kanzeparov Ruslan - kanzeparov@yandex.ru, was engaged in the presentation and database
- Dmitry Malakhov - pecherkin@yandex.ru, was engaged in the front



# SetquestRx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# OffScale-Form-Builder-Spring-Hack

# OffScale-Form-Builder-Spring-Hack
