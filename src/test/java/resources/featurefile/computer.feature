@regression
Feature: Computer Page Test
  As a user I want to build my own computer & add to cart

  @sanity
  Scenario: Verify User Should Navigate To Computer Page Successfully
    Given   I am on homepage
    When    I click on Computers
    Then    I should navigate to Computer page

  @sanity
  Scenario: Verify User Should Navigate To Desktops Page Successfully
    Given   I am on Computers
    When    I click on Computers
    And     I click on Desktops
    Then    I should nevigate to desktop page successfully

  @smoke
  Scenario Outline: verify That User Should Build Your Own Computer And Add To Cart Successfully
    Given   I am on homepage
    When    I click on Coputers
    And     I click on Desktops
    And     I select product "Build your own computer"
    And     I select processoe "<processor>"
    And     I select RAM "<ram>"
    And     I select HDD "<hdd>"
    And     I select OS "<os>"
    And     I select Software "<software>"
    And     I click on Add to Cart Button
    Then    I can add product to cart successfully
    Examples:
      | processor                                       | ram           | hdd               | os                      | software                   |
      | 2.2 GHz Intel Pentium Dual-Core E2200           | 2 GB          | 320 GB            | Vista Home [+$50.00]    | Microsoft Office [+$50.00] |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 4GB [+$20.00] | 400 GB [+$100.00] | Vista Premium [+$60.00] | Acrobat Reader [+$10.00]   |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 8GB [+$60.00] | 320 GB            | Vista  Home [+$50.00]   | Total Commander [+$5.00]   |
