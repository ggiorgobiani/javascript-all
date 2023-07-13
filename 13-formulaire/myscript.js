"use strict";

// Indiquer les champs obligatoires
// --

//#region requiredFields

// 1. Cibler tous les éléments qui possède l'attribut "required"
// 2. remoter sur son élément parent
// 3. Cibler l'élément frere "label"
// 4. Injecter la class "required" sur l'element "label"

// Etape 1
// --
const arr_required = document.querySelectorAll('[required]');

// Etape 2
// --
for (const item of arr_required)
{
    let parent;
    let label;

    // Etape 3.a
    if (item.nodeName === 'INPUT')
    {
        parent = item.parentNode;
    }
    else if (item.nodeName === 'SELECT')
    {
        parent = item.parentNode.parentNode.parentNode;
    }

    // Etape 3.b
    if (parent.nodeName === 'DIV')
    {
        label = parent.querySelector('label');
    }
    else
    {
        label = parent;
    }

    // Etape 4
    label.classList.add('required');
}

//#endregion requiredFields


// Générer les listes de selections du champ "Birthday"
// --

//#region selectFields

const months = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "aout",
    "septembre",
    "octobre",
    "novembre",
    "décembre"
];

// Liste des jours
const select_day = document.querySelector('[name="birthday[day]"]');

for (let i=1; i<=31; i++)
{
    let el_option = document.createElement('option');
        el_option.value = i;
        el_option.innerText = i<=9 ? `0${i}` : i;

    select_day.append( el_option );
}


// Liste des mois
const select_month = document.querySelector('[name="birthday[month]"]');

for (let i=0; i<months.length; i++)
{
    let el_option = document.createElement('option');
        el_option.value = (i+1);
        el_option.innerText = months[i];

    select_month.append( el_option );
}


// Liste des années
const select_year = document.querySelector('[name="birthday[year]"]');

const date = new Date();
const year = date.getFullYear();
const minYear = year-100;

for (let i=year; i>=minYear; i--)
{
    let el_option = document.createElement('option');
        el_option.innerText = i;

    select_year.append( el_option );
}

//#endregion selectFields




// Controle du formulaire
// --

const form = document.querySelector('form');
const el_firstname = document.querySelector('input[name=firstname]');
const el_lastname = document.querySelector('input[name=lastname]');
const el_email = document.querySelector('input[name=email]');
const el_password = document.querySelector('input[name=password]');
const el_confirmpwd = document.querySelector('input[name=confirmpwd]');
const el_birthday_day = document.querySelector('select[name=birth[day]]');
const el_birthday_month = document.querySelector('select[name=birth[month]]');
const el_birthday_year = document.querySelector('select[name=birth[year]]');
const el_agreeterms = document.querySelector('input[name=agreeTerms]');

/**
 * Show an error message
 * 
 * @param {ElementNode} target 
 * @param {string} message 
 * @return void
 */
function showError(target, message)
{
    let el_error = document.createElement('div');
        el_error.classList.add('error');
        el_error.innerText = message;

    target.classList.add('is-invalid');
    target.parentNode.append(el_error);
}

/**
 * Remove all error message
 * 
 * @return void
 */
function removeError()
{
    const isInvalid = document.querySelectorAll('.is-invalid');

    for (const item of isInvalid)
    {
        item.classList.remove('is-invalid');
    }


    const errors = document.querySelectorAll('.error');

    for (const item of errors)
    {
        item.remove();
    }
}

/**
 * Check the firstname constraints
 * 
 * @returns {bool} true if firstname is valid
 */
function checkFirstname()
{
    // Check firstname
    let firstname = el_firstname.value;
    let error = false;

    // firstname is required
    if (!firstname.length)
    {
        showError(el_firstname, "Le champ firstname est obligatoire !!");
        error = true;
    }
    else if (!/^[a-z][a-z-]*[a-z]?$/i.test(firstname))
    {
        showError(el_firstname, "Le prenom doit contenir uniquement des caractères alphabétique.");
        error = true;
    }

    return error;
}



form.addEventListener('submit', event => {
    
    // On considère que le formulaire n'à pas d'erreur
    let error = false;

    removeError();

    // Check firstname
    if (checkFirstname(), checklastname(), checkemail(),
     checkpassword(), confirmpassword(), checkterms(), checkbirthday())
    {
        error = true;
    }
    if (error)
    {
        // preventDefault arrete le comportement par défaut d'un evenement
        event.preventDefault();
    }
});


function checklastname()
{
    let lastname = el_lastname.value;
    let error = false;

    if (!lastname.length)
    {
        showError(el_lastname, "ce champ est obligatoire !");
        error = true;
    }
    else if (!/^[a-z][a-z-]*[a-z]?$/i.test(lastname)) 
    {
        showError(el_lastname, "le nom doit contenir uniquement des caractères alphabétique.")
        error= true;
    }
    return error;
}


function checkemail()
{
    let email = el_email.value;
    let error = false;


    if(!email.length)
    {
        showError(el_email, "ce champ est obligatoire !")
        error = true;
    }
    else if(!/^[0-9a-zA-Z-._]+@[0-9a-zA-Z-]+.[0-9a-zA-Z-]+.[a-zA-Z]{2,5}$/i.test(email))
    {
        showError(el_email, "le mail que vous avez rentré est invalid")
        error = true;
    }
    return error;
}

function checkpassword()
{
    let password = el_password.value;
    let error = false;

    if(!password.length)
    {
        showError(el_password, " ce champ est obligatoire !")
        error = true;
    }
    else if (password.length < 8 || password.length > 16)
    {
        showError(el_password, "password doit contenir entre 8 et 16 caracteres")
        error = true;
    }
    else if((!password.match(/[A-Z]/) || !password.match(/[a-z]/) || !password.match(/[0-9]/) || !password.match(/[^A-Za-z0-9]/)))
    {
        showError(el_password, "password doit contenir un majuscule, un minuscule, un chiffre, un caractere special")
        error = true;
    }
    return error;
}

function confirmpassword()
{
   let pass = el_password.value;
   let confirmation = el_confirmpwd.value;
   let error = false;

   if(confirmation !== pass)
   {
    showError(el_confirmpwd, "le mot de pass doit etre identique !")
    error = true; 
   }
   return error;
}

function checkterms()
{
    let agreeterms = el_agreeterms.checked;
    let error = false;

    if(!agreeterms)
    {
        showError(el_agreeterms, "vous devez accepter les terms !")
        error = true;
    }
    return error;
}



el_firstname.addEventListener('blur', checkFirstname);
el_lastname.addEventListener('blur', checklastname);
el_email.addEventListener('blur', checkemail);
el_password.addEventListener('blur', checkpassword);
el_confirmpwd.addEventListener('blur',confirmpassword);
el_agreeterms.addEventListener('blur',checkterms);

