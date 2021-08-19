import React from 'react';
import { CalendarLayout, CommitDay } from 'components/git-calendar';
import { getContributions, GitContributes } from 'services/github-api';

type Props = {
  gitContributions: GitContributes[];
  darkMode: boolean;
};

const GitCalendar = (props: Props) => {
  const { gitContributions, darkMode } = props;

  return (
    <CalendarLayout darkMode={darkMode}>
      <div style={{ display: 'flex' }}>
        {gitContributions.map(({ contributionDays, firstDay }) => (
          <div key={firstDay} style={{ display: 'flex', flexDirection: 'column' }}>
            {contributionDays.map((contribution) => (
              <CommitDay
                key={contribution.date}
                color={contribution.color}
                darkMode={darkMode}
                count={contribution.contributionCount}
              />
            ))}
          </div>
        ))}
      </div>
    </CalendarLayout>
  );
};

GitCalendar.getInitialProps = async (ctx: { query: { user: string, darkMode: string }}) => {
  const { query } = ctx;

  try {
    const weeklyContributions = await getContributions(query?.user);
    const gitContributions = weeklyContributions.slice(-8);

    return { gitContributions, darkMode: query?.darkMode !== undefined };
  } catch (err) {
    console.log(err);
    return { gitContributions: [] };
  }
};

export default GitCalendar;
