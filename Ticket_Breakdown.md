# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

we have a Facilities. Each facility has a list of shifts. As a company we book agents for the shifts.
our new feature creates a report for a particular facility containing list of agents along with total hours they worked in the quarter
Table 1
Facilities Table may have following columns
Facility Name, Facility Id

Table 2
Agents Table may have following columns
Agent Name, Agent Id,

Table 3
Shifts Table may have following columns
Shift hours, Shift-Facility-Owner=(foreign key - Facility Id), Shift-Agent-id,

- Available functions
getShiftsByFacility (facilityId) => returns array of shifts for the facility
generateReport(shiftsArray).

Since a facility should be able to give a customId to the agent. We can maintain a new table
Table 4
"Facility Agents" with columns as
FacilityId,AgentId,FacilityAgentId

Now coming to tasks.
1. We assume that we will assign incremental numeric id to the agents associated with facility = x+1, where  x is equal to total number of distinct agents associated with that facility, which we can calculate from "Shifts = (Table 3)".

 so we have to write a migration, which populates "Facility Agents = (table 4)", with incremental numeric customId, this customId, can be updated as mentioned in point 1

2. Agent facility registration, when a new agents starts working for a facility, we have to add details in "Facility Agents = (table 4)"

3. since the facility can give a customId to the agent, we should have a page, where we list down the agents associated with the facility along with the agentId, and give a textbox, where facility can update the customId of agent.
This can be a UI task to create the Agent Listing page. and create a put api to update the customID of agent.

4. now we will have to update generateReport Function to use the custom Id from "Facility Agents = (table 4)"
so here we have to write a db call, to get the map of agentId and customId, for the given facility from "Facility Agents = (table 4)"


5.

# User Story 1:
Write migration to add "Facility Agents" with columns as
FacilityId,AgentId,FacilityAgentId

Assign a numeric customId to each agent and facility combination using assumption and logic below
    We assume that we will assign incremental numeric id to the agents associated with facility = x+1, where  x is equal to total number of distinct agents associated with that facility, which we can calculate from "Shifts = (Table 3)".

   so we have to write a migration, which populates "Facility Agents = (table 4)", with incremental numeric customId, this customId, can be updated as mentioned in point 1

- Estimate: 3 hours, we have to test the migration

# User Story 2:
When booking a shift of an agent for a particular facility, make sure agent has custom facility Id, if not add a customId

- Estimate: 1.5 hours.

# User Story 3:
Create a put api, where facilityId, agentId, and customId can be passed, to update the customId

Estimate: 30 mins

# User Story 4:
Create Agent listing page for the facility
Estimate: 30 mins

# User Story 5:
Update generate report function to use custom Id of agent as per "Facility Agents = (table 4)"
here we have to write a db call, to get the map of agentId and customId, for the given facility from "Facility Agents = (table 4)"
 and then use that map to update the shift list received from "Shifts = (Table 3)".

Estimate: 2 hours
