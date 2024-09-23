/// <reference types="cypress" />

import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import register_page from "../pages/register_page"


Given ("I am on register screen" , () => {
    home_page.accessRegister()
})

Given ("I fill name", () =>{
    register_page.fillName('Fabiana Faker')

})

Given ("I fill e-mail {string}", (email) => {
    register_page.fillEmail(email)

})

Given ("I fill password {string}", (password) => {
    register_page.fillPassword(password)

})

Given ("I fill my dates of register", () => {
    register_page.fillName('Fabiana Faker')
    register_page.fillEmail('fabi@teste.com')
    register_page.fillPassword("123456")

})

When ("I click on Register" , () => {
    register_page.doRegister()
})

Then ("I see message {string} on register" , (message) => {
    register_page.checkMessageError(message)
})

Then ("I see success message on register", () =>{
    register_page.fillMessageSucess('Fabiana Faker')
})

