# Product and Planning

## Q1: What are you planning to build?


Application that landlords and tenants will use to complete a lease in a more transparent, interactive, user-friendly medium. Completing a lease is a tedious and complicated task, where most of the language is not comprehensible by non-legal expert.

In collaboration with Law & Design CoLab, we are aiming to make it easier for landlords and tenants to handle their contracts themselves, without requiring a lawyer or realtor to draft and explain all the legal terms within a lease contract for.

As a part of this, we want to make a web-based application with a straightforward UI for the landlord, asking about their requirements on the lease terms, housing situation, timeline of events, and any other required information. These series of questions and answers are then used to automatically generate a legal document that can be shared with the tenants, offering transparency and ease of use to both the tenant and the landlord.

For instance, landlords fill out questions such as start date, end date, break clauses, payment methods and checkboxes for list of already-includes utilities, which is then presented to the tenant in an easy-to-understand and concise way. A legal document is required to be filled out amongst the two parties, but that’s also all handled by the application itself, requiring no manual work.

## Q2: Who are your target users?

An **inexperienced landlord** who is not that familiar with Ontario leases and landlord-tenant laws. (single lease)

A **realtor/small landlord** who is looking to easily manage their multiple leases and keep track of specific dates that can sometimes be confusing.

A **tenant** who has been sent a lease by their landlord and is asked to sign the lease [easily manage and understand important dates of a lease such as rent payments and notices with specific TODO by dates].

A **tenant** who is curious about the tool and wants to get their landlord to use it. (Just-Explore mode) The mode allows guests to freely go through the steps without having to agree to any part of the lease.

## Q3: Why would your users choose your product? What are they using today to solve their problem/need?

Currently the Landlord & Tenant board offers all its legal documents online on its website or in person at select locations. For each form there is an associated “instructions” form containing long and detailed information and instructions on how to fill in these legal documents. This can still be difficult for people new to the norm of legal documents. Our web app tries to connect these forms and instructions in a very intuitive form that is easy to follow.

This web app with save time for new landlords making information easily available to them only when and if they need it (ie. links to specific parts of the instructions). Through our web app, matters pertaining to tenants/landlords become more clear for our users, who otherwise may be intimidated by the large amount of ‘legalese’ found in current tenant/landlord forms.

There are currently tools and recourses for other parts of the landlord/tenant relationship outside of the lease form. Other tools for landlords focused on facilitating tenant screening, payment systems, and maintenance logs. 
There are websites devoted to legal and practical education for landlord and tenants – they are not, however, focused on or designed around the lease document.
There are several civic tech projects focused on later phases on the tenancy relationship in response to existing conflicts.

## Q4: How will you build it?

Our partners, Law and Design CoLab already have an existing application built with React as a starting point. This codebase includes the main page of the web-app alongside a simple menu for navigation. From inspection, this codebase looks clean and has all the necessities to get started.

Since most of our team members are familiar with Python and there is an abundance of PDF manipulation libraries in Python, we’ll be going ahead as Python/Flask as our backend. In terms of hosting, we are planning on using Heroku for hosting the web application.

In terms of the database, we definitely want to stick to a relational database, as we have more experience with it and a few of our members have experienced the hurdles of using a non-relational database, which can be shown to cause headaches and be immature.

For deployment of the database, Google Cloud Platform(GCP) seems to offer the most versatile toolkit with the most competitive prices. We will be requesting and using free credits offered by Google for the duration of the term, and will handover to our partners later in the year. There are some files that need to be stored that don’t require the need of a database, such as listing’s images and contracts - Google Buckets will suffice for storing such files.

Regarding third-party libraries, we have chosen JavaScript as it offers vast amounts of publicially open-source libraries to use, and will be taking advantage of that. For instance, there is no need for us to recreate a calendar component, where a perfectly working one exists with features that are hard to resist (Animation, export, different views, etc). PDF manipulation and exports are a central component to this project, and from some initial digging and research, PyPDF seems to be a suitable library for exporting our content into the PDF and is relatively easy to use.

In terms of testing, we are planning on incorporating tests in our work using Jest, and write tests for both the backends and frontend.

## Q5: What are the user stories that make up the MVP?

### 1.

**User Story**:
As a landlord renting out an extra room in my own home, I want to be able to add etiquette guidelines to the lease so the roommate expectations are clearly defined.

**Acceptance Criteria**
- Have a variety of common guidelines, with fill in the blank style, to select from
- Ability to select percent/flat amount of bill(s) they will pay if any
- Expectations of yard work if any (shovelling, mowing lawn)
- Have custom creation option
- Automatically format additional terms and add to lease
- Selecting terms resulting in more granular choice options for that particular term
- Have to use the online tool instead of copying pasting to avoid overloading the lease


### 2.

**User Story**:
As a student renting out an apartment, I want to be able to easily review specific sections of my lease to clear up a disagreement with the landlord about responsibilities of repairs. 

**Acceptance Criteria**
- Access lease in online form in review mode
- Be able to skip to specific section based on my concern
- This includes generic sections of the lease and the additional terms 
- Be able to navigate with left sidebar

### 3.

**User Story**:
As a landlord with multiple properties, I want to be able to set fixed-payment due dates automatically based on my desired payment frequency.

**Acceptance Criteria**
- Need an initial payment due date
- Date picker to select the initial due date
- Date picker to select the last payment due date
- Dropdown to select frequency (e.g. monthly, bi-weekly, weekly, etc)
- Ability to select custom frequency (e.g. 45 days, 90 days). Unit should be in days
- This will not necessarily result in the same date every month. That’s a different functionality (Not required)
- Could possibly test this by checking # of payments matches # of due dates

### 4.

**User Story**:
As a tenant I want to be able to see on a timeline the important dates so I won't forget any.

**Acceptance Criteria**
- See move in date
- See move out date
- See monthly payment date
- See when I need to give notice to move out
- See when the last day to give notice to increase rent is

### 5.

**User Story**:
As a tenant/landlord, I want to be able to use the information provided on the form and extract it as a PDF to the official Ontario lease form.

**Acceptance Requirement**
- Form has to be completed fully in order to extract it
- Each section that is completed in the application will be added to the correct section within the form
- a filled PDF file to be downloaded on user's computer
- Generate on the fly, don't save document anywhere (Extension: Can save the generated file on a Google Bucket in order to retrieve it faster in the future)
- Style/formatting of the existing Ontario Lease form will not change

### 6.

**User Story**:
As a landlord, I want to be able create an account on the platform that allows me to continue the wizard where I left off.

**Acceptance Requirement**
- Sign up button right after the "Get Started" page
    - Input first name in box
    - Input last name in box
    - Input address in box (separate inputs for street, city, postal codes)
    - \# of rental units
    - Input email address
    - Email address should be a valid email address (RegEx)
    - Input for password (should not be visible)
    - Help text under password, indicating that password must be at least 8 charactres long
    - Input for password confirmation
    - Upon clicking sign up, application should check all the fields are given, passwords match, and the account doesn't already exist
- Upon completion of registration, users will have to confirm their email address via the link sent to them.
- Not a part of this story, but once users are logged in, their progress will be saved

### 7.

**User Story**:
As a landlord/tenant, I want to have access to more thoroguh explanations of the terms/sections within the form.

**Acceptance Requirement**
Sidebar on the right side of the screen

- Heading "Resources" which is defined as:
    - "Glossary of Terms" row: Section which provides external hyperlinls of the common terms (As defined by partners)
    - Each term will have its own row
- Heading "Resources" which is define as:
    - "Learn more" row: A row per common questions/instructions (As defined by partners)
    - Questions will be in bold and answer/text will be in normal font
- Any links to external links within any of the above will be a hyperlink with a blue headlight
- Each row is expandable, which means the answer/more info will be provided once the row has been expanded
- Can only have one row expanded at a time


# Process Details

## Roles & responsibilities

**Mark** - Partner liaison
- Acts as the link between the technical team and the stakeholder
- Clearly communicate requirements to team and estimations to partner
- I will probably be working on backend mostly and some frontend depending on the Trello tasks need to be done and what I feel I is reasonable for me in scope

Strengths and Weaknesses
- Although I'm relatively new to front end, I'm currently in 3 courses related to JavaScript/React and functional programming so I should pick it up quick
- I've got some experience working with relational databases
- Pretty good with python overall, but am new to the libraries we will be using
- I'm very excited to begin working on my first software engineering project however it's a large process that I will need to learn to keep up with

**Demetre** - Internal communication lead
- Organizing the Slack workspace through channels and app integration
- Making sure group is informed of expectations and deadlines
- Guide meeting discussion to hit all our topics while still being concise; efficient meetings
- Allowing the group to be greater than the sum of its parts throught open communication

Strengths:
- Loves testing and testing more
- Optimizing to the last drop, sometimes too much so
- Well versed in functional programming concepts to solve more niche problems

 Weaknesses:
- Stays too focuses on minute details, ie. can’t see the forest the trees
- Overloading myself by taking on too large of a part
- No experience with databases or working in groups this big

**Max** - Meeting logistics + Facilitator
- Plan and inform the team on the best time/location for end-of-sprint(EOS) and general reviews/meetings.
- Stay on top of the flow of the team. Investigate and address problems between members. Point of contact for immediate issues.

Strengths and Weaknesses:
- Have experience with Python and its deployment process.
- Currently learning JS on-the-go.
- Have a habit of not addressing technical debt in the development process.
- Have not had lots of experience in a commercial project.


**Dennis** - Front End Lead
- Prioritize and tailor user experience
- Production, modification and maintenance of web application interfaces
- Contributing back-end experience, collaborating on APIs and more if needed

Strength:

- Previous knowledge of web development
- Familiar with React and Bootstrap
- Took human computer interaction courses
- Attention to details

Weaknesses:

- Little experience with databases
- Average with Flask for our back end

**Amir** - CTO / Tech Lead
- Oversee the overall infrastructure and guide other team members in the right direction.
- Assure client’s needs and priorities are being met by the team, while the team members have a clear understanding of the requirements.
- Take part in planning and scoping out of tasks.

Strengths:
- Have had production-ready experience creating web apps using React, JavaScript and Node
- Test-oriented and pragmatist developer, but proceed with proper research and knowledge
- Able to communicate and interact in both technical/non-technical terms

Weakness:
- Not the most creative and artsy. In terms of front-end, CSS isn’t my best or most favorite thing
- Databases and complicated queries a gray area
- Can get a little too stressed and may not be able to handle as I should if things don’t go well


**Steven** - Scrum master - Trello organization
- Ensures all the components of Agile/Scrum are respected and followed while still tailoring to the group’s uniqueness and dynamic.

Strengths:
- Proficient in front-end development using Javascript, React (with React hooks), and Material UI.
- Proficient in MySQL
- Proficient in Python and Flask for web development

Weaknesses:
- Have not used NodeJS before
- Have no experience being a product manager
- Have no experience with NoSQL databases

**Kevin** - Software Architect
- Will be involved in the planning, writing and reviewing of the code. Additionally, will be actively helping resolve any issues regarding the code  and otherwise that we run into when developing the software.

Strengths:
- Loves problem solving, and developing solutions in an algorithmic way, as well as optimizing run time of said solutions (e.g. What is the best way for us to ensure this game is always solvable? Are we going about this in the most optimal way?)
- Currently learning javascript and web programming in general in csc309
- Very willing to learn when encountering a problem or task which I don’t know how to do

Weaknesses:
- Not much experience with software engineering or web programming before this semester.
- Poor time management, which means sometimes putting off assignments till near its deadlines or self-imposed deadlines, or sometimes giving up sleep to do something which should have been done earlier.
- Sometimes will overestimate myself, such as taking on more tasks than I can handle in a reasonable amount of time.

## Team Rules

**Communications**

We’ll be using Slack our main channel of communication amongst our team members. We expect most queries by every member be addressed by the end of the day. To communicate with our partners, we’ll mostly be using emails for formal content, and have also created a private channel on Slack to allow instant messaging between us for more informal conversations.
Our meetings are set up using google hangouts to be able to voice chat for faster communication

**Meetings**

A weekly 1 hour meeting time has been set that works with everyone's schedule and everyone is then expected to attend. Tasks are assigned each sprint - 2 week periods for task completion - and due to lack of estimation skills they might not always be able to be completed. The team will give notice if an initial estimation was too short for the task so we can share the load if another task was overestimated that sprint as well.

**Conflict Resolution**

1. Dominant personality
- Some members have pointed out that some members have, unintentionally, “carried” the decision making process. We plan to have an equal voice between all members, for all ideas are valued in our team. All decisions will be decided by the major consensus.
2. Communication delays
- Since most of the team members are taking on heavy workload at school, communication might sometimes be a bit delayed. Fortunately each member is either the same classes/projects outside of 301 or has a longtime partnership with each other so most communication can be relayed through personal contacts.
3. Analysis Paralysis
- We also had a problem where we weren’t sure which tech stack to follow through. Our solution is to designate members to do research on each stack and present their findings at the next meeting so we can all decisively go with the best solution for the team and for our partners.

**Events**

We have planned weekly meetings and have booked a room for the meetings every week to host. We have chosen 2 weeks as our sprint time to match the same amount of time we will go between regularly scheduled partner meetings to show updates, get feedback, further directions etc.

We have a meeting at the beginning of every sprint for task assignment, estimation, planning for the sprint. We have a meeting in the middle of every sprint to make sure everyone is on track, if there are issues/bottlenecks, estimations that were very off.

We have slack channels for what we consider the bigger parts we can generally group tasks into (front end, back end, general discussion, meeting set ups) for short bursts of interactions between the team.

**Partner Meetings**

1st meeting: Google Hangouts on Wed Oct 9:
- We discussed logistics on communications carrying forward the term.
- We cleared up confusions and come to a consensus on the priority of work.

2nd meeting: Google Hangouts on Sat Oct 12:
- Reviewed this document and fixed details according to their needs/wants
- A main issue during the review was user stories so we redid them with the partners guidance.

**Artifacts**

We are using Trello and Slack integration for organization purposes. We have cards for each task that are moved from backlog all the way to completed following the agile methodology. These cards will have people assigned to them during the sprint planning and will be moved to different columns during the sprint so all team members know who is working on what, and more generally what is getting done during this sprint.

Priority of tasks is chosen in the team with the help of the partner. Tasks are assigned by volunteering for the task based on many factors, how much time each member has that week to assign to this project, how familiar they are with the technology needed, how much they are willing to learn, how interested they are in working on that task.

# Highlights
We realized very early on that the human planning and team management would need to have a very laid out process. A team of 4 has a much different dynamic than a team of 7.

A team of 4 can “self organize” to a certain extent. 
- there is less work to do
- each person can take ownership of one section
- non overlapping parts of the project

A team of 7 needs better communication, times set up directly for meetings as it’s much harder to organize 7 people than 4 people ad-hoc. One single chat, i.e facebook messenger, gets clogged very quickly with different people talking about different things and scrolling up to find something from a few days ago might be an impossible task.
