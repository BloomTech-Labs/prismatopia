const LambdaRole = require("./MutationsHelpers/LambdaRole");
const PeopleGroup = require("./MutationsHelpers/PeopleGroup");
const PeopleGroupMembers = require("./MutationsHelpers/PeopleGroupMember");
const Person = require("./MutationsHelpers/Person");
const Product = require("./MutationsHelpers/Product");
const ProductRoles = require("./MutationsHelpers/ProductRole");
const Project = require("./MutationsHelpers/Project");
const ProjectGroup = require("./MutationsHelpers/ProjectGroup");
const ProjectGroupMember = require("./MutationsHelpers/ProjectGroupMember");
const ProjectRoles = require("./MutationsHelpers/ProjectRoles");
const Role = require("./MutationsHelpers/Role");
module.exports = {
  ...LambdaRole,
  ...PeopleGroup,
  ...PeopleGroupMembers,
  ...Person,
  ...Product,
  ...ProductRoles,
  ...Project,
  ...ProjectGroup,
  ...ProjectGroupMember,
  ...ProjectRoles,
  ...Role
};
