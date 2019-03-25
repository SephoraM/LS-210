/**
 * We're putting together some information about our new company Space Design.
 * Not all roles have been filled yet. But although we have a CEO and Scrum
 * Master, displaying them shows undefined. Why is that?
 */
// Roles (salary still to be determined)

const ceo = {
  tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
  salary: 0,
};

const developer = {
  tasks: ['turn product vision into code'],
  salary: 0,
};

const scrumMaster = {
  tasks: ['organize scrum process', 'manage scrum teams'],
  salary: 0,
};

// Team -- we're hiring!

const team = {};

// team[ceo] = 'Kim'; // -> team['[object Object]'] = 'Kim'
// team[scrumMaster] = 'Alice'; // -> team['[object Object]'] = 'Alice'
// team[developer] = undefined; // -> team['[object Object]'] = undefined
// this ends up with team having one property: '[object Object]': undefined
// The reason for this is that we were accessing the variables which have
// been defined and point to objects as the keys and using the string representation of object
// If we use dot notation or a string value with bracket notation it works
team.ceo = 'Kim';
team.scrumMaster = 'Alice';
team.developer = undefined;

const company = {
  name: 'Space Design',
  team,
  projectedRevenue: 500000,
};

console.log(`----{ ${company.name} }----`);
console.log(`CEO: ${company.team.ceo}`); // dot notation
console.log(`Scrum master: ${company.team.scrumMaster}`); // dot notation
console.log(`Projected revenue: $${company.projectedRevenue}`);

// ----{ Space Design }----
// CEO: undefined
// Scrum master: undefined
// Projected revenue: $500000
