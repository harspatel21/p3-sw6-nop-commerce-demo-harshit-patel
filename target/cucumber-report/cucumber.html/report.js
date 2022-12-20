$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 2,
  "name": "Computer Page Test",
  "description": "As a user I want to build my own computer \u0026 add to cart",
  "id": "computer-page-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 19,
  "name": "verify That User Should Build Your Own Computer And Add To Cart Successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on Coputers",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on Desktops",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select processoe \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select RAM \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select HDD \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I can add product to cart successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 32,
      "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 33,
      "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 34,
      "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista  Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 35,
      "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7338247600,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "verify That User Should Build Your Own Computer And Add To Cart Successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on Coputers",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on Desktops",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select processoe \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select RAM \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select Software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I can add product to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 214881100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnCoputers()"
});
formatter.result({
  "duration": 1118356500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnDesktops()"
});
formatter.result({
  "duration": 471780800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputerPageSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 1011784800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerPageSteps.iSelectProcessoe(String)"
});
formatter.result({
  "duration": 232988900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 206085000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 129002300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerPageSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 115295900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 19
    }
  ],
  "location": "ComputerPageSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 128464500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 98770000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iCanAddProductToCartSuccessfully()"
});
formatter.result({
  "duration": 311227400,
  "status": "passed"
});
formatter.after({
  "duration": 866955200,
  "status": "passed"
});
formatter.before({
  "duration": 3592722300,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "verify That User Should Build Your Own Computer And Add To Cart Successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on Coputers",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on Desktops",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select processoe \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select RAM \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select HDD \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select OS \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select Software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I can add product to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 37100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnCoputers()"
});
formatter.result({
  "duration": 1047190800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnDesktops()"
});
formatter.result({
  "duration": 506576200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputerPageSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 1065396200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerPageSteps.iSelectProcessoe(String)"
});
formatter.result({
  "duration": 146988600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 202743300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 152003100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerPageSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 154228100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 19
    }
  ],
  "location": "ComputerPageSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 148341500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 135092900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iCanAddProductToCartSuccessfully()"
});
formatter.result({
  "duration": 735425400,
  "status": "passed"
});
formatter.after({
  "duration": 785074900,
  "status": "passed"
});
formatter.before({
  "duration": 3370639400,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "verify That User Should Build Your Own Computer And Add To Cart Successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on Coputers",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on Desktops",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select processoe \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select RAM \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select OS \"Vista  Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select Software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I can add product to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 30400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnCoputers()"
});
formatter.result({
  "duration": 618697000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnDesktops()"
});
formatter.result({
  "duration": 505928900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputerPageSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 1022162800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerPageSteps.iSelectProcessoe(String)"
});
formatter.result({
  "duration": 138925900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 189902400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 140996700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista  Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerPageSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 88779200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputerPageSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 188840400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 117782300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iCanAddProductToCartSuccessfully()"
});
formatter.result({
  "duration": 299686700,
  "status": "passed"
});
formatter.after({
  "duration": 867082400,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errorMessage"
      ],
      "line": 29,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "abcd123@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 30,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "xyz123@gmail.com",
        "abc123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 31,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfafasd@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 32,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3422923800,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter email \"abcd123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 47700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 936183700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 193208900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 163042300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 409351300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 61561300,
  "status": "passed"
});
formatter.after({
  "duration": 800274200,
  "status": "passed"
});
formatter.before({
  "duration": 3384972100,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter email \"xyz123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 34900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 898723800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 163236700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 140106300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 385200800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 69523600,
  "status": "passed"
});
formatter.after({
  "duration": 910197300,
  "status": "passed"
});
formatter.before({
  "duration": 3804919200,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter email \"adfafasd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 43900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 913146900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfafasd@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 165552300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 163026700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 414684000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 57071300,
  "status": "passed"
});
formatter.after({
  "duration": 799404100,
  "status": "passed"
});
formatter.before({
  "duration": 3095036200,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verify the user should logout successfully",
  "description": "",
  "id": "login-test;verify-the-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I enter email \"Rajaram103@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I should logout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 229300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 977920300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rajaram103@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 174659700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 132706300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 423038800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 20074401700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldLogoutSuccessfully()"
});
formatter.result({
  "duration": 22100,
  "status": "passed"
});
formatter.after({
  "duration": 884219300,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 2,
  "name": "Register Test",
  "description": "As user I want to register on nop commerce website",
  "id": "register-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 3408285000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should create account successfully",
  "description": "",
  "id": "register-test;user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click on female radio Button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter first name \"Raja\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter last name \"Ram\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select date of birth \"22\",\"January\",\"1980\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter emailid \"Rajaram119@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter password1 \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter confirm password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should get registration successful \"Your registration completed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 300500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 534299200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnFemaleRadioButton()"
});
formatter.result({
  "duration": 172192800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Raja",
      "offset": 20
    }
  ],
  "location": "RegisterSteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 156261400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ram",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 162905100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 24
    },
    {
      "val": "January",
      "offset": 29
    },
    {
      "val": "1980",
      "offset": 39
    }
  ],
  "location": "RegisterSteps.iSelectDateOfBirth(String,String,String)"
});
formatter.result({
  "duration": 566729700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rajaram119@gmail.com",
      "offset": 17
    }
  ],
  "location": "RegisterSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 160946900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 120889700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 140330100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 621937000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 38
    }
  ],
  "location": "RegisterSteps.iShouldGetRegistrationSuccessful(String)"
});
formatter.result({
  "duration": 54437800,
  "status": "passed"
});
formatter.after({
  "duration": 796387600,
  "status": "passed"
});
});