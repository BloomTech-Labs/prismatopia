import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from '../';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
};


export type Person = {
   __typename?: 'Person',
  id: Scalars['ID'],
  firstname?: Maybe<Scalars['String']>,
  lastname?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>,
  program?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  githubId?: Maybe<Scalars['String']>,
  slackId?: Maybe<Scalars['String']>,
  profilePicURL?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type PersonWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  firstname?: Maybe<Scalars['String']>,
  firstname_not?: Maybe<Scalars['String']>,
  firstname_in?: Maybe<Array<Scalars['String']>>,
  firstname_not_in?: Maybe<Array<Scalars['String']>>,
  firstname_lt?: Maybe<Scalars['String']>,
  firstname_lte?: Maybe<Scalars['String']>,
  firstname_gt?: Maybe<Scalars['String']>,
  firstname_gte?: Maybe<Scalars['String']>,
  firstname_contains?: Maybe<Scalars['String']>,
  firstname_not_contains?: Maybe<Scalars['String']>,
  firstname_starts_with?: Maybe<Scalars['String']>,
  firstname_not_starts_with?: Maybe<Scalars['String']>,
  firstname_ends_with?: Maybe<Scalars['String']>,
  firstname_not_ends_with?: Maybe<Scalars['String']>,
  lastname?: Maybe<Scalars['String']>,
  lastname_not?: Maybe<Scalars['String']>,
  lastname_in?: Maybe<Array<Scalars['String']>>,
  lastname_not_in?: Maybe<Array<Scalars['String']>>,
  lastname_lt?: Maybe<Scalars['String']>,
  lastname_lte?: Maybe<Scalars['String']>,
  lastname_gt?: Maybe<Scalars['String']>,
  lastname_gte?: Maybe<Scalars['String']>,
  lastname_contains?: Maybe<Scalars['String']>,
  lastname_not_contains?: Maybe<Scalars['String']>,
  lastname_starts_with?: Maybe<Scalars['String']>,
  lastname_not_starts_with?: Maybe<Scalars['String']>,
  lastname_ends_with?: Maybe<Scalars['String']>,
  lastname_not_ends_with?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>,
  timezone_not?: Maybe<Scalars['String']>,
  timezone_in?: Maybe<Array<Scalars['String']>>,
  timezone_not_in?: Maybe<Array<Scalars['String']>>,
  timezone_lt?: Maybe<Scalars['String']>,
  timezone_lte?: Maybe<Scalars['String']>,
  timezone_gt?: Maybe<Scalars['String']>,
  timezone_gte?: Maybe<Scalars['String']>,
  timezone_contains?: Maybe<Scalars['String']>,
  timezone_not_contains?: Maybe<Scalars['String']>,
  timezone_starts_with?: Maybe<Scalars['String']>,
  timezone_not_starts_with?: Maybe<Scalars['String']>,
  timezone_ends_with?: Maybe<Scalars['String']>,
  timezone_not_ends_with?: Maybe<Scalars['String']>,
  program?: Maybe<Scalars['String']>,
  program_not?: Maybe<Scalars['String']>,
  program_in?: Maybe<Array<Scalars['String']>>,
  program_not_in?: Maybe<Array<Scalars['String']>>,
  program_lt?: Maybe<Scalars['String']>,
  program_lte?: Maybe<Scalars['String']>,
  program_gt?: Maybe<Scalars['String']>,
  program_gte?: Maybe<Scalars['String']>,
  program_contains?: Maybe<Scalars['String']>,
  program_not_contains?: Maybe<Scalars['String']>,
  program_starts_with?: Maybe<Scalars['String']>,
  program_not_starts_with?: Maybe<Scalars['String']>,
  program_ends_with?: Maybe<Scalars['String']>,
  program_not_ends_with?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  email_not?: Maybe<Scalars['String']>,
  email_in?: Maybe<Array<Scalars['String']>>,
  email_not_in?: Maybe<Array<Scalars['String']>>,
  email_lt?: Maybe<Scalars['String']>,
  email_lte?: Maybe<Scalars['String']>,
  email_gt?: Maybe<Scalars['String']>,
  email_gte?: Maybe<Scalars['String']>,
  email_contains?: Maybe<Scalars['String']>,
  email_not_contains?: Maybe<Scalars['String']>,
  email_starts_with?: Maybe<Scalars['String']>,
  email_not_starts_with?: Maybe<Scalars['String']>,
  email_ends_with?: Maybe<Scalars['String']>,
  email_not_ends_with?: Maybe<Scalars['String']>,
  githubId?: Maybe<Scalars['String']>,
  githubId_not?: Maybe<Scalars['String']>,
  githubId_in?: Maybe<Array<Scalars['String']>>,
  githubId_not_in?: Maybe<Array<Scalars['String']>>,
  githubId_lt?: Maybe<Scalars['String']>,
  githubId_lte?: Maybe<Scalars['String']>,
  githubId_gt?: Maybe<Scalars['String']>,
  githubId_gte?: Maybe<Scalars['String']>,
  githubId_contains?: Maybe<Scalars['String']>,
  githubId_not_contains?: Maybe<Scalars['String']>,
  githubId_starts_with?: Maybe<Scalars['String']>,
  githubId_not_starts_with?: Maybe<Scalars['String']>,
  githubId_ends_with?: Maybe<Scalars['String']>,
  githubId_not_ends_with?: Maybe<Scalars['String']>,
  slackId?: Maybe<Scalars['String']>,
  slackId_not?: Maybe<Scalars['String']>,
  slackId_in?: Maybe<Array<Scalars['String']>>,
  slackId_not_in?: Maybe<Array<Scalars['String']>>,
  slackId_lt?: Maybe<Scalars['String']>,
  slackId_lte?: Maybe<Scalars['String']>,
  slackId_gt?: Maybe<Scalars['String']>,
  slackId_gte?: Maybe<Scalars['String']>,
  slackId_contains?: Maybe<Scalars['String']>,
  slackId_not_contains?: Maybe<Scalars['String']>,
  slackId_starts_with?: Maybe<Scalars['String']>,
  slackId_not_starts_with?: Maybe<Scalars['String']>,
  slackId_ends_with?: Maybe<Scalars['String']>,
  slackId_not_ends_with?: Maybe<Scalars['String']>,
  profilePicURL?: Maybe<Scalars['String']>,
  profilePicURL_not?: Maybe<Scalars['String']>,
  profilePicURL_in?: Maybe<Array<Scalars['String']>>,
  profilePicURL_not_in?: Maybe<Array<Scalars['String']>>,
  profilePicURL_lt?: Maybe<Scalars['String']>,
  profilePicURL_lte?: Maybe<Scalars['String']>,
  profilePicURL_gt?: Maybe<Scalars['String']>,
  profilePicURL_gte?: Maybe<Scalars['String']>,
  profilePicURL_contains?: Maybe<Scalars['String']>,
  profilePicURL_not_contains?: Maybe<Scalars['String']>,
  profilePicURL_starts_with?: Maybe<Scalars['String']>,
  profilePicURL_not_starts_with?: Maybe<Scalars['String']>,
  profilePicURL_ends_with?: Maybe<Scalars['String']>,
  profilePicURL_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<PersonWhereInput>>,
  OR?: Maybe<Array<PersonWhereInput>>,
  NOT?: Maybe<Array<PersonWhereInput>>,
};

export type Product = {
   __typename?: 'Product',
  id: Scalars['ID'],
  name: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  projects?: Maybe<Array<Project>>,
};


export type ProductProjectsArgs = {
  where?: Maybe<ProjectWhereInput>,
  orderBy?: Maybe<ProjectOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type ProductWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  projects_every?: Maybe<ProjectWhereInput>,
  projects_some?: Maybe<ProjectWhereInput>,
  projects_none?: Maybe<ProjectWhereInput>,
  AND?: Maybe<Array<ProductWhereInput>>,
  OR?: Maybe<Array<ProductWhereInput>>,
  NOT?: Maybe<Array<ProductWhereInput>>,
};

export type Project = {
   __typename?: 'Project',
  id: Scalars['ID'],
  name: Scalars['String'],
  product: Product,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  projectRoles?: Maybe<Array<ProjectRole>>,
  projectNotes?: Maybe<Array<ProjectNote>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};


export type ProjectProjectRolesArgs = {
  where?: Maybe<ProjectRoleWhereInput>,
  orderBy?: Maybe<ProjectRoleOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type ProjectProjectNotesArgs = {
  where?: Maybe<ProjectNoteWhereInput>,
  orderBy?: Maybe<ProjectNoteOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type ProjectNote = {
   __typename?: 'ProjectNote',
  id: Scalars['ID'],
  project: Project,
  topic: Scalars['String'],
  note: Scalars['String'],
  createdBy?: Maybe<Person>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export enum ProjectNoteOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TopicAsc = 'topic_ASC',
  TopicDesc = 'topic_DESC',
  NoteAsc = 'note_ASC',
  NoteDesc = 'note_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ProjectNoteWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  project?: Maybe<ProjectWhereInput>,
  topic?: Maybe<Scalars['String']>,
  topic_not?: Maybe<Scalars['String']>,
  topic_in?: Maybe<Array<Scalars['String']>>,
  topic_not_in?: Maybe<Array<Scalars['String']>>,
  topic_lt?: Maybe<Scalars['String']>,
  topic_lte?: Maybe<Scalars['String']>,
  topic_gt?: Maybe<Scalars['String']>,
  topic_gte?: Maybe<Scalars['String']>,
  topic_contains?: Maybe<Scalars['String']>,
  topic_not_contains?: Maybe<Scalars['String']>,
  topic_starts_with?: Maybe<Scalars['String']>,
  topic_not_starts_with?: Maybe<Scalars['String']>,
  topic_ends_with?: Maybe<Scalars['String']>,
  topic_not_ends_with?: Maybe<Scalars['String']>,
  note?: Maybe<Scalars['String']>,
  note_not?: Maybe<Scalars['String']>,
  note_in?: Maybe<Array<Scalars['String']>>,
  note_not_in?: Maybe<Array<Scalars['String']>>,
  note_lt?: Maybe<Scalars['String']>,
  note_lte?: Maybe<Scalars['String']>,
  note_gt?: Maybe<Scalars['String']>,
  note_gte?: Maybe<Scalars['String']>,
  note_contains?: Maybe<Scalars['String']>,
  note_not_contains?: Maybe<Scalars['String']>,
  note_starts_with?: Maybe<Scalars['String']>,
  note_not_starts_with?: Maybe<Scalars['String']>,
  note_ends_with?: Maybe<Scalars['String']>,
  note_not_ends_with?: Maybe<Scalars['String']>,
  createdBy?: Maybe<PersonWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<ProjectNoteWhereInput>>,
  OR?: Maybe<Array<ProjectNoteWhereInput>>,
  NOT?: Maybe<Array<ProjectNoteWhereInput>>,
};

export enum ProjectOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  StartAsc = 'start_ASC',
  StartDesc = 'start_DESC',
  EndAsc = 'end_ASC',
  EndDesc = 'end_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ProjectRole = {
   __typename?: 'ProjectRole',
  id: Scalars['ID'],
  person?: Maybe<Person>,
  project?: Maybe<Project>,
  role?: Maybe<Role>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export enum ProjectRoleOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ProjectRoleWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  person?: Maybe<PersonWhereInput>,
  project?: Maybe<ProjectWhereInput>,
  role?: Maybe<RoleWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<ProjectRoleWhereInput>>,
  OR?: Maybe<Array<ProjectRoleWhereInput>>,
  NOT?: Maybe<Array<ProjectRoleWhereInput>>,
};

export type ProjectWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  product?: Maybe<ProductWhereInput>,
  start?: Maybe<Scalars['DateTime']>,
  start_not?: Maybe<Scalars['DateTime']>,
  start_in?: Maybe<Array<Scalars['DateTime']>>,
  start_not_in?: Maybe<Array<Scalars['DateTime']>>,
  start_lt?: Maybe<Scalars['DateTime']>,
  start_lte?: Maybe<Scalars['DateTime']>,
  start_gt?: Maybe<Scalars['DateTime']>,
  start_gte?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  end_not?: Maybe<Scalars['DateTime']>,
  end_in?: Maybe<Array<Scalars['DateTime']>>,
  end_not_in?: Maybe<Array<Scalars['DateTime']>>,
  end_lt?: Maybe<Scalars['DateTime']>,
  end_lte?: Maybe<Scalars['DateTime']>,
  end_gt?: Maybe<Scalars['DateTime']>,
  end_gte?: Maybe<Scalars['DateTime']>,
  projectRoles_every?: Maybe<ProjectRoleWhereInput>,
  projectRoles_some?: Maybe<ProjectRoleWhereInput>,
  projectRoles_none?: Maybe<ProjectRoleWhereInput>,
  projectNotes_every?: Maybe<ProjectNoteWhereInput>,
  projectNotes_some?: Maybe<ProjectNoteWhereInput>,
  projectNotes_none?: Maybe<ProjectNoteWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<ProjectWhereInput>>,
  OR?: Maybe<Array<ProjectWhereInput>>,
  NOT?: Maybe<Array<ProjectWhereInput>>,
};

export type Query = {
   __typename?: 'Query',
  products: Array<Maybe<Product>>,
  product: Product,
};


export type QueryProductArgs = {
  id: Scalars['ID']
};

export type Role = {
   __typename?: 'Role',
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type RoleWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  type_not?: Maybe<Scalars['String']>,
  type_in?: Maybe<Array<Scalars['String']>>,
  type_not_in?: Maybe<Array<Scalars['String']>>,
  type_lt?: Maybe<Scalars['String']>,
  type_lte?: Maybe<Scalars['String']>,
  type_gt?: Maybe<Scalars['String']>,
  type_gte?: Maybe<Scalars['String']>,
  type_contains?: Maybe<Scalars['String']>,
  type_not_contains?: Maybe<Scalars['String']>,
  type_starts_with?: Maybe<Scalars['String']>,
  type_not_starts_with?: Maybe<Scalars['String']>,
  type_ends_with?: Maybe<Scalars['String']>,
  type_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<RoleWhereInput>>,
  OR?: Maybe<Array<RoleWhereInput>>,
  NOT?: Maybe<Array<RoleWhereInput>>,
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>,
  Product: ResolverTypeWrapper<Product>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>,
  ProjectWhereInput: ProjectWhereInput,
  ProductWhereInput: ProductWhereInput,
  ProjectRoleWhereInput: ProjectRoleWhereInput,
  PersonWhereInput: PersonWhereInput,
  RoleWhereInput: RoleWhereInput,
  ProjectNoteWhereInput: ProjectNoteWhereInput,
  ProjectOrderByInput: ProjectOrderByInput,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Project: ResolverTypeWrapper<Project>,
  ProjectRoleOrderByInput: ProjectRoleOrderByInput,
  ProjectRole: ResolverTypeWrapper<ProjectRole>,
  Person: ResolverTypeWrapper<Person>,
  Role: ResolverTypeWrapper<Role>,
  ProjectNoteOrderByInput: ProjectNoteOrderByInput,
  ProjectNote: ResolverTypeWrapper<ProjectNote>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {},
  Product: Product,
  ID: Scalars['ID'],
  String: Scalars['String'],
  DateTime: Scalars['DateTime'],
  ProjectWhereInput: ProjectWhereInput,
  ProductWhereInput: ProductWhereInput,
  ProjectRoleWhereInput: ProjectRoleWhereInput,
  PersonWhereInput: PersonWhereInput,
  RoleWhereInput: RoleWhereInput,
  ProjectNoteWhereInput: ProjectNoteWhereInput,
  ProjectOrderByInput: ProjectOrderByInput,
  Int: Scalars['Int'],
  Project: Project,
  ProjectRoleOrderByInput: ProjectRoleOrderByInput,
  ProjectRole: ProjectRole,
  Person: Person,
  Role: Role,
  ProjectNoteOrderByInput: ProjectNoteOrderByInput,
  ProjectNote: ProjectNote,
  Boolean: Scalars['Boolean'],
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type PersonResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  program?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  githubId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  slackId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  profilePicURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
}>;

export type ProductResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  projects?: Resolver<Maybe<Array<ResolversTypes['Project']>>, ParentType, ContextType, ProductProjectsArgs>,
}>;

export type ProjectResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>,
  start?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  end?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  projectRoles?: Resolver<Maybe<Array<ResolversTypes['ProjectRole']>>, ParentType, ContextType, ProjectProjectRolesArgs>,
  projectNotes?: Resolver<Maybe<Array<ResolversTypes['ProjectNote']>>, ParentType, ContextType, ProjectProjectNotesArgs>,
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
}>;

export type ProjectNoteResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ProjectNote'] = ResolversParentTypes['ProjectNote']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>,
  topic?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  note?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  createdBy?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
}>;

export type ProjectRoleResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ProjectRole'] = ResolversParentTypes['ProjectRole']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>,
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>,
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  products?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType>,
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>,
}>;

export type RoleResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Role'] = ResolversParentTypes['Role']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  DateTime?: GraphQLScalarType,
  Person?: PersonResolvers<ContextType>,
  Product?: ProductResolvers<ContextType>,
  Project?: ProjectResolvers<ContextType>,
  ProjectNote?: ProjectNoteResolvers<ContextType>,
  ProjectRole?: ProjectRoleResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Role?: RoleResolvers<ContextType>,
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
