import S from 'fluent-json-schema';

const SCOREKEEPING_CODE = {
  pitch: 'pitch',
  ball: 'ball',
};

const SCOREKEEPING_RESULT = {
  ball_in_play: 'ball_in_play',
  strikeout: 'strikeout',
};

// prettier-ignore
const schema = S.object()
  .id('createScoringEvent-body')
  .prop('id', S.string().format('uuid').required())
  .prop('game_id', S.string().format('uuid').required())
  .prop('timestamp', S.string().format('date-time').required())
  .prop('data', S.object()
    .prop('code', S.string().enum(Object.keys(SCOREKEEPING_CODE)).required())
    .prop('attributes', S.object()
      .prop('advances_count', S.boolean().required())
      .prop('result', S.string().enum(Object.keys(SCOREKEEPING_RESULT)).required()))
    .required(['attributes']))
  .required(['data']);

export default schema;
