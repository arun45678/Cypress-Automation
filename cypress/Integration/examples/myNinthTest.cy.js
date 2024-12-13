import "cypress-xpath";


describe('Asite e2e test', () => {
  it('Verify Login and Input Title', () => {
    //const expectedList = [month, date, year];
    // Visit the login page
    cy.visit('https://systemqa.asite.com/login');
    cy.get("select[aria-label='Asite Cloud']").select('Asite Cloud')
    cy.wait(3000)

    // Interact with the login iframe
    cy.get('iframe#iFrameAsite')
      .its('0.contentDocument.body')
      .should('not.be.undefined')
      .then(cy.wrap)
      .within(() => {
        cy.get('form[id="login-form"]')
          .invoke('attr', 'target', '_self') // Set target attribute
          .should('have.attr', 'target', '_self');

        // Perform login


        cy.get('input[name="_58_login"]').type('akhatri@asite.com');
        cy.get('input[name="_58_password"]').type('Asite@123');
        cy.get('#login-cloud').click();
      });

    // Wait for login and navigate to the form
    cy.wait(5000);
    cy.visit('https://adoddleqaak.asite.com/adoddle/home?action_id=1',{timeout: 90000 });
    cy.get('#navcommunications').click();
    cy.get("div[title='Meeting Minutes Template Version - Child - QA'] span").click();
    cy.get("div[title='Ad-Hoc Meeting Minutes'] span").click();
    cy.get("div[title='Ad-Hoc Meeting'] span").click();
    // cy.get(".repeated-item > li:nth-child(5) a[title*='QA Test Build']")
    // .should('exist')
    // .invoke('text')
    // .then((text) => {
    //   const extractedText = text.trim(); // Store the text in a variable and trim it
    //   cy.log(extractedText);
    //   //cy.log(`Extracted Text: ${extractedText}`); // Log it in Cypress UI
    //   //console.log(`Extracted Text: ${extractedText}`); // Log it in the browser console
    // });
    // cy.get(".repeated-item > li:nth-child(3) a[title*='ID: AHM185']")
    // .should('exist')
    // .invoke('text')
    // .then((text) => {
    //   const qatestText = text.trim(); // Store the text in a variable and trim it
    //   cy.log(qatestText);
    //   //cy.log(`Extracted Text: ${extractedText}`); // Log it in Cypress UI
    //   //console.log(`Extracted Text: ${extractedText}`); // Log it in the browser console
    // });



    // Interact with the parent window
    cy.window().then((win) => {
      win.parent.$ = win.$; // Attach the $ object from the parent window
      console.error(win); // Log the window object
    });

    // Click the button to create a form
    cy.get('.btn-create-form > span',{timeout: 30000 }).click();
    cy.wait(5000);

    // Interact with the second iframe (#createFormIframe)
    cy.get("iframe#createFormIframe", { timeout: 50000 })
      .its("0.contentDocument.body")
      .should("not.be.undefined")
      .then(cy.wrap)
      .within(() => {
        cy.get("section[class='section']", { timeout: 30000 })
          .invoke("attr", "class", "_self") // Set target attribute
          .should("have.attr", "class", "_self");

        // Title Field value
        cy.get("input[ng-model='oriMsgCustomFields.Title']", { timeout: 30000 }).type("QA TEST UAT"); // Input the title value
        cy.wait(2000);

        // Area Drop down value selection based on click ( Dynamic)
        cy.xpath(
          "//div[@class='form-container meeting-container ori-view ng-scope loaded']//div//div[1]//div[1]//item-selection[1]//div[1]//button[1]",{timeout: 30000 }
        )
          .invoke("attr", "style", "background-color: yellow;")
          .trigger("click", { force: true });
        cy.get(".itemContainer div")
          .eq(1)
          .contains("Low Severity")
          .trigger("click", { force: true });
        
        //Contract Package drop down value selection
        cy.xpath(
          "//div[@class='form-container meeting-container ori-view ng-scope loaded']//div[2]//div[1]//item-selection[1]//div[1]//button[1]//div[1]",{timeout: 30000 }
        )
          .invoke("attr", "style", "background-color: yellow;")
          .trigger("click", { force: true });
        cy.get(".itemContainer div")
          .eq(2)
          .contains("Electrical")
          .trigger("click", { force: true });
        

        //Discipline drop down value selection
        cy.xpath(
          "//div[@class='configured-MOM-fields']//div[3]//div[1]//item-selection[1]//div[1]//button[1]//div[1]",{timeout: 30000 }
        )
          .invoke("attr", "style", "background-color: yellow;")
          .trigger("click", { force: true });
        cy.get(".itemContainer div")
          .eq(3)
          .contains("Mechanical")
          .trigger("click", { force: true });
        

        // Meeting Date : Date Picker Clicking
        cy.get(
          "input[class='ang-datepciker ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required']",{timeout: 30000 }
        ).trigger("click", { force: true });
        

        // Clicking on Year drop down
        cy.get(
          'div[class="_720kb-datepicker-calendar-header-middle _720kb-datepicker-calendar-month"]',{timeout: 30000 }
        )
          .eq(2)
          .find("a[tabindex='-1']")
          .find("span.ng-binding")
          .eq(1)
          .should("be.visible") // Verifies the element is visible
          .invoke("attr", "style", "background-color: yellow;") // Apply yellow background
          .click({ force: true });
        

        // selction of year from the list of the years
        const year = 2026;
        cy.get('div[class="_720kb-datepicker-calendar-years-pagination"]',{timeout: 30000 })
          .eq(2)
          .contains(`${year}`)
          .should("be.visible")
          .invoke("attr", "style", "background-color: yellow;") // Apply yellow background
          .click({ force: true });

        // Clicking on Month Drop down
        cy.get(
          'div[class="_720kb-datepicker-calendar-header-middle _720kb-datepicker-calendar-month"]',{timeout: 30000 }
        )
          .eq(2)
          .find("a[tabindex='-1']")
          .find("span.ng-binding")
          .eq(0)
          .should("be.visible")
          .invoke("attr", "style", "background-color: yellow;") // Apply yellow background
          .click({ force: true });

        // Selection of Month from the list of all months
        const month = "March";
        cy.get('div[class="_720kb-datepicker-calendar-header months"]',{timeout: 30000 })
          .contains(`${month}`)
          .invoke("attr", "style", "background-color: yellow;")
          .click({ force: true });

        // Selection of Date

        const date = 1;
        cy.get(
          "div._720kb-datepicker-calendar._720kb-datepicker-open a._720kb-datepicker-calendar-day.ng-binding.ng-scope",{timeout: 30000 }
        )
          .not("a[ng-repeat='px in prevMonthDays']",{timeout: 30000 })
          .contains(date.toString())
          .should("be.visible")
          .invoke("attr", "style", "background-color: yellow;") // Highlight the selected date
          .click({ force: true });

        //  Meeting Number Input
        cy.get("input[ng-model='conItem.displayValue']",{timeout: 30000 })
          .eq(0)
          .invoke("attr", "style", "background-color: yellow;") // Apply yellow background
          .should("be.visible") // Verifies the element is visible
          .type("QA-AK-Meeting-001");
        

        //  Meeting Ttile
        cy.get("input[ng-model='conItem.displayValue']",{timeout: 30000 })
          .eq(1)
          .invoke("attr", "style", "background-color: yellow;") // Apply yellow background
          .should("be.visible") // Verifies the element is visible
          .type("QA-AK-Meeting-Title");
        

        // Project drop down selection
        cy.xpath("//div[7]//div[1]//item-selection[1]//div[1]//button[1]//div[1]",{timeout: 30000 })
          .invoke("attr", "style", "background-color: yellow;") // Apply yellow background
          .should("be.visible"); // Verifies the element is visible
        cy.get(".itemContainer div")
          .eq(4)
          .contains("Type Four")
          .trigger("click", { force: true });
        

        // Returned Works drop down selection

        cy.xpath("//div[8]//div[1]//item-selection[1]//div[1]//button[1]//div[1]",{timeout: 30000 })
          .invoke("attr", "style", "background-color: yellow;") // Apply yellow background
          .should("be.visible"); // Verifies the element is visible
        cy.get(".itemContainer div")
          .eq(5)
          .contains("Landscape")
          .trigger("click", { force: true });
        

        cy.xpath("//div[9]//div[1]//item-selection[1]//div[1]//button[1]//div[1]",{timeout: 30000 })
          .invoke("attr", "style", "background-color: yellow;") // Apply yellow background
          .should("be.visible"); // Verifies the element is visible
        cy.get(".itemContainer div")
          .eq(6)
          .contains("MM")
          .trigger("click", { force: true });
        

        // Next Meeting Date Selection

        // Date picker open
        cy.xpath(
          "//datepicker[@date-set='oriMsgCustomFields.NextMeetingDate']//img[@alt='Select Date']"
        )
          .invoke("attr", "style", "background-color: yellow;") // Apply yellow background
          .should("be.visible") // Verifies the element is visible
          .click();

        // Click on year
        cy.xpath("//span[@class='ng-binding'][normalize-space()='2024']")
          .eq(2)
          .invoke("attr", "style", "background-color: yellow;") // Apply yellow background
          .should("be.visible") // Verifies the element is visible
          .click({ force: true });

        //Year Selection
        cy.get('div[class="_720kb-datepicker-calendar-years-pagination')
          .eq(1)
          .contains(`${year}`)
          .should("be.visible")
          .invoke("attr", "style", "background-color: yellow;") // Apply yellow background
          .click({ force: true });

        // Month drop down click
        cy.xpath("//span[@class='ng-binding'][normalize-space()='December']")
          .eq(2)
          .should("be.visible")
          .invoke("attr", "style", "background-color: yellow;") // Apply yellow background
          .click({ force: true });

        // Month selection
        cy.get('div[class="_720kb-datepicker-calendar-header months"]')
          .contains(`${month}`)
          .invoke("attr", "style", "background-color: yellow;")
          .click({ force: true });

        //Date Selection

        cy.get(
          "div._720kb-datepicker-calendar._720kb-datepicker-open a._720kb-datepicker-calendar-day.ng-binding.ng-scope"
        )
          .not("a[ng-repeat='px in prevMonthDays']")
          .contains(date.toString())
          .should("be.visible")
          .invoke("attr", "style", "background-color: yellow;") // Highlight the selected date
          .click({ force: true });

        cy.get("input[ng-model='oriMsgCustomFields.Location']",{timeout: 30000 })
          .should("be.visible")
          .invoke("attr", "style", "background-color: yellow;") // Highlight the selected date
          .type("QA AK Test Location");

        cy.contains("Participant",{timeout: 30000 })
          .should("be.visible")
          .invoke("attr", "style", "background-color: yellow;") // Highlight the selected date
          .click();

        cy.get(
          "item-selection[ng-if=\"participant.Participant_Is_External_user == 'No'\"] div[title='Please Select...']",{timeout: 30000 }
        )
          .should("be.visible")
          .invoke("attr", "style", "background-color: yellow;") // Highlight the selected date
          .click();

        cy.get("div.searchItemsContainer.ng-scope > input[placeholder='Search']",{timeout: 30000 })
          .eq(7)
          .should("be.visible")
          .invoke("attr", "style", "background-color: yellow;") // Highlight the selected date
          .type("Arun");

        cy.get("div.itemContainer > div[ng-repeat='item in list']",{timeout: 30000 })
          .eq(7)
          .should("be.visible")
          .invoke("attr", "style", "background-color: yellow;") // Highlight the selected date
          .contains("Arun")
          .click();

        cy.get("td:nth-child(6)",{timeout: 30000 })
          .should("be.visible")
          .invoke("attr", "style", "background-color: yellow;") // Highlight the selected date
          .click();

        cy.get("input[placeholder='Agenda']",{timeout: 30000 })
          .should("be.visible")
          .invoke("attr", "style", "background-color: yellow;") // Highlight the selected date
          .type("Agenda For Internal Test");

        cy.get(
          ".ng-pristine.ng-untouched.ng-empty.ng-invalid.ng-invalid-required.ng-valid-maxlength[ng-model='recordItem.Item_Label']",{timeout: 30000 }
        )
          .should("be.visible")
          .invoke("attr", "style", "background-color: yellow;") // Highlight the selected date
          .type("Sample Test");

        cy.get(
          ".ng-pristine.ng-untouched.ng-valid.ng-empty.ng-valid-maxlength[ng-model='recordItem.MeetingNotes']",{timeout: 30000 }
        )
          .should("be.visible")
          .invoke("attr", "style", "background-color: yellow;") // Highlight the selected date
          .type("MTNL QA TEST");
        

        cy.get(
          "button[ng-click=\"addNewItem(recordItem.TaskListGroup.TaskList, 'task')\"]",{timeout: 30000 }
        )
          .should("be.visible")
          .invoke("attr", "style", "background-color: yellow;") // Highlight the selected date
          .click();
        

        cy.get(
          ".ng-pristine.ng-untouched.ng-valid.ng-empty.ng-valid-maxlength.ng-valid-required[maxlength='100']",{timeout: 30000 }
        )
          .should("be.visible")
          .invoke("attr", "style", "background-color: yellow;") // Highlight the selected date
          .type("Internal Build Task");
        

        cy.xpath("//div[@class='item-task-assigned']//button[@type='button']",{timeout: 30000 })
          .should("be.visible")
          .invoke("attr", "style", "background-color: yellow;") // Highlight the selected date
          .click();
        cy.wait(2000);

        cy.get("div.searchItemsContainer.ng-scope > input[placeholder='Search']",{timeout: 30000 })
          .eq(7)
          .should("be.visible")
          .invoke("attr", "style", "background-color: yellow;") // Highlight the selected date
          .type("Arun");
        

        cy.get("div.itemContainer > div[ng-repeat='item in list']",{timeout: 30000 })
          .eq(7)
          .should("be.visible")
          .invoke("attr", "style", "background-color: yellow;") // Highlight the selected date
          .contains("Arun")
          .click();
        

        

        cy.get('input[ng-model="taskItem.TaskDays"]',{timeout: 30000 })
          .should("not.be.disabled")
          .clear()
          .type("3", { force: true });




        cy.get('#create-form-options', { timeout: 30000 }).click();

        cy.xpath("//a[normalize-space()='Associate Docs']")
          .should('be.visible')
          .invoke('attr', 'style', 'background-color: yellow;') // Highlight the selected date
          .click()


        cy.get("div[title='Meeting Minutes Template Version - Child - QA'] span[class='ng-binding']", { timeout: 60000 })
          .should('be.visible')
          .invoke('attr', 'style', 'background-color: yellow;') // Highlight the selected date
          .click()
        

        cy.xpath("//span[normalize-space()='00 AK Test']", { timeout: 60000 })
          .should('be.visible')
          .invoke('attr', 'style', 'background-color: yellow;') // Highlight the selected date
          .click()
        

        cy.xpath("//input[@class='check-row']",{timeout: 30000 }).eq(0)
          .should('be.visible')
          .invoke('attr', 'style', 'background-color: yellow;') // Highlight the selected date
          .click()
        

        cy.contains("Associate and Close",{timeout: 30000 })
          .should('be.visible')
          .invoke('attr', 'style', 'background-color: yellow;') // Highlight the selected date
          .click()
        


          // cy.contains("Send")
          // .invoke('attr', 'style', 'background-color: yellow;') // Highlight the selected date
          // .should('exist') // Ensure the element exists
          // .click();








      });

  });
});