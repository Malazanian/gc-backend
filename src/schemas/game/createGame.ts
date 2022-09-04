import S from 'fluent-json-schema';

// prettier-ignore
const schema = S.object()
  .id('createGame-body')
  .prop('id', S.string().format('uuid').required())
  .prop('start', S.string().format('date-time').required())
  .prop('end', S.string().format('date-time').required())
  .prop('arrive', S.string().format('date-time').required());

export default schema;
