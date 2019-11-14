# Lease Wizard (team 9)

## Iteration 1 (Sprint 1) - Review & Retrospect

 * When: Nov 11th 2019
 * Where: Google Hangouts

## Process - Reflection

As this course is an introduction to software engineering, our core goals are to utilize and understand the most recent tools and processes used throughout the industry, so we can be better prepared to enter the job market and have a good foundation. To achieve this, we have tried a few things, but not limited to following agile ideology - working in sprints and having constant communication with team members, getting involved with code reviews and submitting pull requests, and using Slack as our communication platform.

#### Decisions that turned out well

List process-related (i.e. team organization) decisions that, in retrospect, turned out to be successful.

1. Requiring pull requests and 2 accepts before adding to master<br/>
  When working in pairs  with someone you know, you can feasibly hold each other accountable with what gets pushed to master. With this many people that don't know each other at a personal level we need to ensure quality of code in a formal way. This decision allowed us to catch many things the original code author didn't see as well to make sure we aren't staying consistent as possible. Other team members with more experiene with react pointed out more cannonical react-style ways of implemented features and showing us easier solutions in general. While this takes time to review and accept it overall added a ton of value for us in terms of how we work as a team together.

2. Having the partner on Slack<br/>
   This allows us to have a better ad-hoc back and forth without requiring emails or scheduling a video call. This increased paced of communication mid sprint allows us to stay on task and ask for clarification when needed.

3. Having meetings in person<br/>
  We found google hangouts calls are good for quick updates but when decisions that requirement team opinions and discussion nothing beats in person meetings for us. When we have to decide what we are working on the next spring and decide what are the most important tasks we all have slightly different opinions of what we need to make up our MVP. It's easier to specifically refer to people in person and read body language overall. When proposing an opinion often times the unsaid reactions speak more than the verbal reactions.

#### Decisions that did not turn out as well as we hoped

List process-related (i.e. team organization) decisions that, in retrospect, were not as successful as you thought they would be.

1. Using Slack<br/>
  We envisioned  ourselves having these perfectly on tasks and seperate conversations occuring in our Slack workspace. The reality is that conversatoins are messier, cross topics quickly, and in general are too multi-disciplinary to be neatly placed into these slack channels we set up. Almost immediately after starting to write software, the slack was bombarded with mundane updates about issues being added, people being assigned to tasks, every time a PR has a comment added, and overall become much too messy to use for any kind of real work. The slack is only used for communicating with the partner is a less formal, and quicker way, than email

2. Using Trello<br/>
  We were hoping to use Trello to be able to see where everyone is at during a sprint and seeing what lanes each task in it. We had it all set up to start and then never used it again. We didn't find it useful enough to use and keep updated. The overhead required for keeping up and updating all these tasks greatly exceeds the benefits realized by this system

#### Planned changes

1. GitHub issues/projects instead of Trello<br/>
  Having all of the workflow occur in the same space was better than splitting it over multiple tools. Being able to quickly see what issue a PR is solving on the same site is much easier than between tabs and comparing different formats and labels. Having everything linked to one GitHub account instead of a GitHub and a Trello account makes managing everything you're assigned to easier.

2. Facebook messenger instead of Slack for team communication<br/>
  While many slack features beat out the facebook counterparts (multiple channels, notifying the entire channel,replying in seperate threads to name a few) the quick response and casual nature of messenger makes intra-group communication easier. We will use slack for formal communications/reminders about deadlines, planning in person meetings for the team, and for video calls with the partner. Overall we have mostly entirely switched to messenger for things that require quick or casual replies.


## Product - Review

#### Goals and/or tasks that were met/completed:

1. Pages in Money subsection<br/>
  We planned to finish creating all of these initial pages, as an exercise of creating these pages, but also as something we can show to the client to start. All the tasks/pages we planned for the spring were finished on time for the demo, though some PRs of these pages were not quite yet done and spilled into the next sprint to be merged.

2. Dealing with Legacy code<br/>
  We had pre-existing CSS given to us. This CSS was very generous in its selectors. Every single button was given the same style, this is unreasonable to use in an application of this size. We had to change this code to allow us to style submit buttons different from day pickers different from navigation buttons. Essentially,we planned to refactor and make modifications to the original code so that it suits our needs and were successful in doing so.

3. Initial Process Setup<br/>
  Much of our process work is front loaded. We needed to set up deployment for the first demo. We needed to learn how to use GitHub pull requests. We needed to find ways to automate the tasks moving from one lane to another based on the branch it's associated with. All of this work was done in the first sprint so we can take advantage of all of it in later sprints.

4. Setup Linter<br/>
  As a way to expediate our development process and minimize unwanted coding styles, we wanted to follow the best coding practice guidelines and decided to use a linter (ESlint+ Prettier) to the project, that will show warnings to the users once a certain bad practice/issue is found throughout the codebase. This should enable us to write much cleaner and consistent code that will eventually make it easier for us, or any other development team to continue working on this project.

#### Goals and/or tasks that were planned but not met/completed:

  1. We wanted to have our backend setup by this point, so that we can start working on the PDF generation right away. Given our stack consists of Flask and React, this proved to be more complicated than we anticipated, and requires more research and investigation. We have inquired Adam about implementing this setup but haven't had the chance to sit down and listen to his advice. We will be meeting with him this upcoming sprint and take his advice in how to best hook the backend with the frontend.

  2. Related to the above task, we also haven't had the chance to setup the Google Cloud Platform account and the neccesary VMs/DB we may need for this project. This is simply due to the fact that this was blocked by the task above, and has postponed to once we have the setup figured out, no need to start burning credits!

#### Artifacts:

 By choosing to use GitHub issues over Trello, most of our artifacts are in fact in this GitHub repository, under the issues tab, where it can be noted which tasks were taken on and completed by which team members.


#### How was your product demo?

 Prepare:

We have deployed our master/stable branch on Heroku, and are using continuous deployment (CD) to keep the application up to date with the newest accepted PR. This allows our partners to have an update-to-date view on the product we are creating without having to look through branches, checkout code, install packages and all the extra faff with it. While our main contact Avery knows how to set up this project locally, having it hosted and deployed now will save us headaches down the road and avoid the "it works on my computer". Any PR merged to master will be automatically deployed to Heroku using Heroku's plugin for GitHub.

 Partners thoughts:

They enjoyed the progress we were making as well as the process of having PRs and reviews to be required. They liked our process just as much as our progress in this regard. They appreciated on being able to view our open issues to see what tasks we have made for ourselves and to make sure we have the same idea of what to focus on in mind.

In terms of the quality of pages, they were understanding about our use of material UI for ease of development (not having to create custom components) and how it won't perfectly match the mock-ups we have on Figma.

They request a few changes after a more thorough review of the pages delivered. These requests were given on the slack workspace informally and they also opened issues for us to keep these requested changes tracked like any other task we assigned to ourselves.

Overall:

For the partner, we think having them be able to see our entire process laid out for them and showing we are being as professional as possible gave them a little ease of mind. This compared to just pushing to Heroku every 2 weeks with no view on process or progress in between.


## Meeting Highlights

Going into the next iteration, our main insights are:

Below is a list of goals for tasks that we want to achieve in the upcoming sprint but did not get a chance to do so and flush out in part 1, as we hadn't had our partner meeting until Tuesday, November 12th.

 1. Generate Ontario lease form PDF:<br/>
    Our main goal for this sprint is to be able to generate the official Ontario lease document using the information filled out by the user. This includes a few other major tasks:
      1. A functional backend that we can use to serve APIs
      2. Database schema and setup which can hold and provide us the information we need for the PDF generation
      3. Find and use a third-party library that takes the information and spits it out on a given PDF
    For both us and our partners, the PDF generation seems to be one of the most important features within this system, and thus we want to focus on delivering this task as best as we can.

 2. Incorporate tests into our code base<br/>
  Now that we are going to be dealing with backend tasks, tests can come in handy as we'll be working with quite a lot of logic in order to validate our code/functions. We'll initially start with unit tests, which verify a small function, and do our best to move onto integration tests if possible.

 3. Implement resources section<br/>
  Goal of this application is to facilitate the lease signing application process and make it easier for both tenants and landlords to communicate more effectively. As a result, all ambiguity has to be cleared up, which means we'll be focusing on the "Resources" section on the front-end - Help center that contains useful information about common terms in the current step of the application. e.g. Definition of Pro-rated rent, frequently asked questions, hyperlinks to official resources of a certain policy, etc.

 4. Fix the UI/Bugs<br/>
  We want to deliver a product that works well, and essentially meets a high standard set by both parties, rather than creating many subpar pages/components. This means we want to address the feedback given to us as a result of our partner meeting (Issues on GitHub with tag "feedback"). This allows whoever takes over this product down the line, is better able to implement new features and use any existing components that we've created.

Couple of points regarding processes:

1. Time to create pages:<br/>
 We hope that we can amortize the cost of creating pages since we are much more familiar with all the technologies we have chosen to use as well as the existing legacy code from the partner. We hope that we have set ourselves up to save time in the future by setting up all the generic components we hope to use such as buttons, tooltips, and text fields for example.

2. PR time estimations:<br/>
 We realized that our biggest bottleneck is terms of writing code is the delay between submitting PRs and having them reviewed. We underestimated how long it would take to do each review. We didn't consider that often we needed to go back, and change code based on reviews and then re-review before accepting the PR. Going forward we should bake more time into how long each task will take to include some time for this back-and -forth of the review process.
