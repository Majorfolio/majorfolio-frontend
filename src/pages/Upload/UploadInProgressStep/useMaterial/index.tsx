import React, { useState } from 'react';
import useText from '../../../../hooks/common/useText';

export default function useMaterial() {
  const titleState = useText('title');
  const majorState = useText('major');
  const semesterState = useText('semester');
  const subjectNameState = useText('subjectName');
  const professorState = useText('professor');
  const gradeState = useText('grade');
  const fullScoreState = useText('fullScore');
  const scoreState = useText('score');
  const descriptionState = useText('description');

  return {
    titleState,
    majorState,
    semesterState,
    subjectNameState,
    professorState,
    gradeState,
    fullScoreState,
    scoreState,
    descriptionState,
  };
}
