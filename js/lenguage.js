const Lang = document.querySelector(".lenguage");
const Link = document.querySelectorAll("a");

// NAV
const home = document.querySelector(".nav_home");
const about = document.querySelector(".nav_about");
const service = document.querySelector(".nav_service");
const residencial = document.querySelector(".nav_residencial");
const corporative = document.querySelector(".nav_corporative");
const contact = document.querySelector(".nav_contact");

// Home
const title = document.querySelector(".home_title");
const description = document.querySelector(".home_description");
const button = document.querySelector("#btn_learn");

//About
const title_about = document.querySelector("#title_about");
const home_title_about = document.querySelector("#home_title_about");
const home_description_about = document.querySelector(
  "#home_description_about"
);
const home_sub_description_about = document.querySelector(
  "#home_sub_description_about"
);
const sub_title_about = document.querySelector("#sub_title_about");

// Service
const title_service = document.querySelector("#title_service");
const sub_title_service = document.querySelector("#sub_title_service");
const service_1 = document.querySelector("#service_1");
const service_2 = document.querySelector("#service_2");
const service_3 = document.querySelector("#service_3");
const service_4 = document.querySelector("#service_4");
const service_5 = document.querySelector("#service_5");
const service_6 = document.querySelector("#service_6");
const service_7 = document.querySelector("#service_7");
const service_8 = document.querySelector("#service_8");

// Residencial
const title_residencial = document.querySelector("#title_residencial");
const sub_title_residencial = document.querySelector("#sub_title_residencial")

const residencial_title_basic = document.querySelectorAll("#residencial_title_basic");
const residencial_basic_1 = document.querySelectorAll("#residencial_basic_1");
const residencial_basic_2 = document.querySelectorAll("#residencial_basic_2");
const residencial_basic_3 = document.querySelectorAll("#residencial_basic_3");
const residencial_basic_4 = document.querySelectorAll("#residencial_basic_4");
const residencial_basic_5 = document.querySelectorAll("#residencial_basic_5");

const residencial_title_premium = document.querySelectorAll("#residencial_title_premium");
const residencial_standar_1 = document.querySelectorAll("#residencial_standar_1");
const residencial_standar_2 = document.querySelectorAll("#residencial_standar_2");
const residencial_standar_3 = document.querySelectorAll("#residencial_standar_3");
const residencial_standar_4 = document.querySelectorAll("#residencial_standar_4");
const residencial_standar_5 = document.querySelectorAll("#residencial_standar_5");

const residencial_title_custom = document.querySelectorAll("#residencial_title_custom");
const residencial_premiun_1 = document.querySelectorAll("#residencial_premiun_1");
const residencial_premiun_2 = document.querySelectorAll("#residencial_premiun_2");
const residencial_premiun_3 = document.querySelectorAll("#residencial_premiun_3");
const residencial_premiun_4 = document.querySelectorAll("#residencial_premiun_4");
const residencial_premiun_5 = document.querySelectorAll("#residencial_premiun_5");
const residencial_premiun_6 = document.querySelectorAll("#residencial_premiun_6");

const residencial_title = document.querySelectorAll("#residencial_title")

const btn_residencial = document.querySelectorAll("#btn_residencial");

// Empresarial
const title_empresarial = document.querySelector("#title_empresarial");
const sub_title_empresarial = document.querySelector("#sub_title_empresarial")

// Contact
const title_contact = document.querySelector("#title_contact")
const title_sub_contact = document.querySelector("#title_sub_contact")
const phone_contact = document.querySelector(".phone_contact")
const mail = document.querySelector(".mail")
const submit = document.querySelector("#submit")

Link.forEach((el) => {
  el.addEventListener("click", () => {
    Lang.querySelector(".active").classList.remove("active");
    el.classList.add("active");

    const attr = el.getAttribute("lenguage");

    // Nav
    home.textContent = data[attr].home;
    about.textContent = data[attr].about;
    residencial.textContent = data[attr].residencial;
    service.textContent = data[attr].service;
    corporative.textContent = data[attr].corporative;
    contact.textContent = data[attr].contact;

    // Home
    title.textContent = data[attr].title;
    description.textContent = data[attr].description;
    button.textContent = data[attr].button;

    //About
    title_about.textContent = data[attr].title_about;
    sub_title_about.textContent = data[attr].sub_title_about;
    home_title_about.textContent = data[attr].home_title_about;
    home_description_about.textContent = data[attr].home_description_about;
    home_sub_description_about.textContent =
      data[attr].home_sub_description_about;

    // Service
    title_service.textContent = data[attr].title_service;
    sub_title_service.textContent = data[attr].sub_title_service;
    service_1.textContent = data[attr].service_1;
    service_2.textContent = data[attr].service_2;
    service_3.textContent = data[attr].service_3;
    service_4.textContent = data[attr].service_4;
    service_5.textContent = data[attr].service_5;
    service_6.textContent = data[attr].service_6;
    service_7.textContent = data[attr].service_7;
    service_8.textContent = data[attr].service_8;

    // Residencial
    title_residencial.textContent = data[attr].title_residencial;
    sub_title_residencial.textContent = data[attr].sub_title_residencial;

    residencial_title_basic.forEach(element =>{
      element.textContent = data[attr].residencial_title_basic;
    })
    residencial_basic_1.forEach(element =>{
      element.textContent = data[attr].residencial_basic_1;
    })
    residencial_basic_2.forEach(element =>{
      element.textContent = data[attr].residencial_basic_2;
    })
    residencial_basic_3.forEach(element =>{
      element.textContent = data[attr].residencial_basic_3;
    })
    residencial_basic_4.forEach(element =>{
      element.textContent = data[attr].residencial_basic_4;
    })
    residencial_basic_5.forEach(element =>{
      element.textContent = data[attr].residencial_basic_5;
    })

    residencial_title_premium.forEach(element =>{
      element.textContent = data[attr].residencial_title_premium;
    })
    residencial_standar_1.forEach(element =>{
      element.textContent = data[attr].residencial_standar_1;
    })
    residencial_standar_2.forEach(element =>{
      element.textContent = data[attr].residencial_standar_2;
    })
    residencial_standar_3.forEach(element =>{
      element.textContent = data[attr].residencial_standar_3;
    })
    residencial_standar_4.forEach(element =>{
      element.textContent = data[attr].residencial_standar_4;
    })
    residencial_standar_5.forEach(element =>{
      element.textContent = data[attr].residencial_standar_5;
    })

    residencial_title_custom.forEach(element =>{
      element.textContent = data[attr].residencial_title_custom;
    })
    residencial_premiun_1.forEach(element =>{
      element.textContent = data[attr].residencial_premiun_1;
    })
    residencial_premiun_2.forEach(element =>{
      element.textContent = data[attr].residencial_premiun_2;
    })
    residencial_premiun_3.forEach(element =>{
      element.textContent = data[attr].residencial_premiun_3;
    })
    residencial_premiun_4.forEach(element =>{
      element.textContent = data[attr].residencial_premiun_4;
    })
    residencial_premiun_5.forEach(element =>{
      element.textContent = data[attr].residencial_premiun_5;
    })
    residencial_premiun_6.forEach(element =>{
      element.textContent = data[attr].residencial_premiun_6;
    })

    residencial_title.forEach(element =>{
      element.textContent = data[attr].residencial_title;
    })

    btn_residencial.forEach(element => {
      element.textContent = data[attr].btn_residencial;
    })

    // Empresarial
    title_empresarial.textContent = data[attr].title_empresarial;
    sub_title_empresarial.textContent = data[attr].sub_title_empresarial;

    //Contact
    title_contact.textContent = data[attr].title_contact;
    title_sub_contact.textContent = data[attr].title_sub_contact;
    mail.textContent = data[attr].mail;
    submit.textContent = data[attr].submit;
    phone_contact.textContent = data[attr].phone_contact

  });
});

var data = {
  english: {
    // NAV
    home: "Home",
    about: "About",
    service: "Services",
    residencial: "Residencial",
    corporative: "Corporative",
    contact: "Contact",

    title: "Help with Cleaning?",

    description:
      "Keeping your spaces clean and tidy is very important for health and good performance. BFJ CLEAN SERVICES specializes in providing a professional and technical cleaning service that would benefit your company or home.",

    button: "Learn More",

    // About
    title_about: "About Us",
    sub_title_about: "National company with +5 years of experience",
    home_title_about:
      "Thanks for considering BFJ CLEAN SERVICES to take care of your home or property.",
    home_description_about:
      "Our professional cleaning service is committed to your satisfaction and we look forward to providing you with superior and reliable cleaning service. Our company is based on the belief that a clean home is a happy home. A clean environment is essential for human health and well-being; lending itself to less stress, more comfort and greater productivity. With the demand of hectic schedules and little time to enjoy life, cleanliness is the one thing that is often neglected. The new generation of single entrepreneurs and dual-income families leave little time to properly care for a home and still have time to enjoy life.",
    home_sub_description_about:
      "When you choose BFJ CLEAN SERVICES, a cleaning service to care for your home or business, you can rest assured that you have made the right decision. Our staff is extensively trained to properly care for your home or property",

    //   Service
    title_service: "Service",
    sub_title_service: "What do we do?",
    service_1: "Carpet cleaning",
    service_2: "Window Cleaning",
    service_3: "Bathroom cleaning",
    service_4: "Furniture Cleaning",
    service_5: "Garden Cleaning",
    service_6: "Floor Cleaning",
    service_7: "Office cleaning",
    service_8: "Room cleaning",

    // Residencial
    title_residencial: "Personal Plans",
    sub_title_residencial: "Residential Services",
    residencial_title: "Residential",

    residencial_title_basic: "Basic",
    residencial_basic_1: "Window cleaning",
    residencial_basic_2: "Furniture Cleaning",
    residencial_basic_3: "Bathroom cleaning",
    residencial_basic_4: "Carpet cleaning",
    residencial_basic_5: "Roof Cleaning",

    residencial_title_premium: "Premium",
    residencial_standar_1: "Window cleaning",
    residencial_standar_2: "Furniture Cleaning",
    residencial_standar_3: "Bathroom cleaning",
    residencial_standar_4: "Carpet cleaning",
    residencial_standar_5: "Roof Cleaning",

    residencial_title_custom: "Custom",
    residencial_premiun_1: "Window cleaning",
    residencial_premiun_2: "Furniture Cleaning",
    residencial_premiun_3: "Bathroom cleaning",
    residencial_premiun_4: "Carpet cleaning",
    residencial_premiun_5: "Roof Cleaning",
    residencial_premiun_6: "Additional",

    btn_residencial: "Quote",

    title_empresarial: "Business Plan",
    sub_title_empresarial: "Business Service",

    //Contact

    title_contact: "Contact",
    title_sub_contact: "Learn More Information",
    phone_contact: "Phone",
    mail: "Email",
    submit: "Submit"
  },
};
