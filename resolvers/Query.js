
const LambdaRole = require("./QueryHelpers/LambdaRole");
const PeopleGroup = require("./QueryHelpers/PeopleGroup");
const PeopleGroupMembers = require("./QueryHelpers/PeopleGroupMember");
const Person = require("./QueryHelpers/Person");
const Product = require("./QueryHelpers/Product");
const ProductRoles = require("./QueryHelpers/ProductRole");
const Project = require("./QueryHelpers/Project");
const ProjectGroup = require("./QueryHelpers/ProjectGroup");
const ProjectGroupMember = require("./QueryHelpers/ProjectGroupMember");
const ProjectRoles = require("./QueryHelpers/ProjectRoles");
const Role = require("./QueryHelpers/Role");

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
