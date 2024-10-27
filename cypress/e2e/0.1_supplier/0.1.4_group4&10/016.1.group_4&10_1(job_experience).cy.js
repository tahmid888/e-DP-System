/// <reference types="cypress"/>

it('Group 4 & 10, Job Experience', function() {
  cy.visit('http://testing.edp.gov.bd/')
  //Change User Name
  cy.get('input[name="username"]')
  .type('anisur002')
  //Change Password
  cy.get('input[name="password"]')
  .type('Sqa@12345')
  cy.wait(200)
  cy.get('.MuiButton-contained')
  .click()
  cy.wait(3000)

  //গ্রুপ ৪ এবং ১০ নিবন্ধন
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-root > :nth-child(7) > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.wait(200)

  //গ্রুপ ৪ এবং ১০ তালিকাভুক্তি
  cy.get('.MuiCollapse-wrapperInner > .MuiList-root > a > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.wait(200)

  //পরবর্তী
  cy.get('.css-19i8qlo > .MuiButtonBase-root')
  .click()
  cy.wait(500)

  //গ্রুপ ৪ ও ১০ সম্পর্কিত কাজের অভিজ্ঞতা
  //Job Experience
  cy.get('#simple-tabpanel-related-job-exp > div > form > div > div > div.MuiBox-root.css-uewl2b > div > div > div > div:nth-child(2) > div:nth-child(3) > div > div.jodit-react-container > div > div.jodit-workplace > div.jodit-wysiwyg')
  .click()
  .type('Creating a dummy job experience for a software engineer can be useful for practice, creating sample resumes,') 
  .type('or testing job application systems. Here’s a detailed example of a fictional job experience for a software engineer:')

  .type('John Doe;')

  .type('Email: johndoe@example.com | Phone: (123) 456-7890 | LinkedIn: linkedin.com/in/johndoe')

  .type('Professional Experience')
  .type('Software Engineer')
  .type('Tech Innovations Ltd, San Francisco, CA')
  .type('January 2021 – Present')

  .type('Developed and maintained web applications using JavaScript, React, and Node.js, enhancing user experience and performance. Designed and implemented RESTful APIs in collaboration with front-end developers, improving system integration and communication. Optimized database queries in MySQL, reducing data retrieval times by 30% and improving application efficiency. Led a team of 5 junior developers in agile sprints, ensuring timely delivery of features and bug fixes. Collaborated with cross-functional teams, including UX/UI designers and product managers, to deliver high-quality software products. Conducted code reviews and provided constructive feedback, ensuring adherence to best practices and coding standards. Implemented automated testing using Jest and Cypress, increasing test coverage and reducing manual testing effort. Utilized cloud services like AWS for deployment and maintenance, ensuring high availability and scalability of applications. Developed microservices architecture for a scalable and maintainable system, resulting in a 20% increase in deployment efficiency.')
  .type('Junior Software Engineer')
  .type('Innovatech Solutions, San Francisco, CA')
  .type('June 2018 – December 2020')

  .type('Assisted in developing web applications using HTML, CSS, JavaScript, and Angular, contributing to front-end development and design. Participated in the full software development lifecycle, from requirements gathering to deployment and maintenance.')
  .type('Collaborated with senior engineers to debug and resolve issues, enhancing problem-solving skills and technical knowledge. Maintained and improved existing codebases, implementing best practices for code readability and maintainability.')
  .type('Implemented version control using Git, facilitating collaboration and version tracking across development teams. Contributed to the design and development of database schemas in PostgreSQL, supporting data integrity and performance.')
  .type('Performed unit and integration testing to ensure software quality and reliability. Documented software features and functionalities, providing clear guidelines for future maintenance and development. Education')
  .type('Bachelor of Science in Computer Science')
  .type('University of California, Berkeley')
  .type('Graduated: May 2018')

  .type('Skills')
  .type('Programming Languages: JavaScript, TypeScript, Python, Java')
  .type('Frameworks/Libraries: React, Angular, Node.js, Express.js')
  .type('Databases: MySQL, PostgreSQL, MongoDB')
  .type('Tools: Git, Docker, Jenkins, AWS, Jest, Cypress')
  .type('Methodologies: Agile, Scrum, Test-Driven Development (TDD)')
  
  .type('Projects')
  .type('E-commerce Web Application: Developed a full-stack e-commerce application using React, Node.js, and MongoDB, featuring user authentication, product management, and payment processing.')
  .type('Real-time Chat Application: Built a real-time chat application using Socket.io and Express.js, enabling instant messaging and notifications.')
  .type('Weather Forecasting App: Created a weather forecasting app using React and OpenWeather API, providing real-time weather updates and forecasts.')

  .type('Certifications')
  .type('AWS Certified Solutions Architect')
  .type('Certified ScrumMaster (CSM)')

  //Office Or UnitName
  cy.get('input[name="g4n10EnlistmentPreApplicationJobExperienceParamSet.0.officeOrUnitName"]')
  .type('East Bengal Regiment')

  //Start Date
  cy.get('.css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(81) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)

  //End Date
  cy.get('.css-d3mrj5 > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(32) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)

  //Remarks
  cy.get('#simple-tabpanel-related-job-exp > div > form > div > div > div.MuiBox-root.css-uewl2b > div > div > div > div:nth-child(2) > div:nth-child(6) > div > div.jodit-react-container > div > div.jodit-workplace')
  .click()
  .type('Job descriptions are used for a variety of reasons')
  cy.wait(200)

  //Attachment with document name (if any):
  //Document Name*
  cy.get('input[name="g4n10EnlistmentPreApplicationJobExperienceParamSet.0.previousWorkExperienceAttachmentParams.0.fileMetaName"]')
  .type('Attach 1')
  cy.wait(200)

  //Attachments*
  cy.get('.addFileBox')
  .selectFile('cypress/fixtures/citizenship_certificate.jpeg')
  cy.wait(200)

  //ADD MORE
  cy.get(':nth-child(7) > .subFormButtonContainer > .subFormIconContainer > .MuiButtonBase-root')
  .click()

  //Document Name*
  cy.get('input[name="g4n10EnlistmentPreApplicationJobExperienceParamSet.0.previousWorkExperienceAttachmentParams.1.fileMetaName"]')
  .type('Attach 2')
  cy.wait(200)

  //Attachments*
  cy.get('.addFileBox')
  .selectFile('cypress/fixtures/citizenship_certificate.jpeg')
  cy.wait(200)
})