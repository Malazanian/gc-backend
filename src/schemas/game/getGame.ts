import S from 'fluent-json-schema';

// prettier-ignore
const schema = S.object()
  .id('getGame-params')
  .prop('id', S.string().format('uuid').required());

export default schema;
