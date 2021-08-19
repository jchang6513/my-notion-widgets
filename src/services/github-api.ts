import { githubPersonalAccessToken } from 'helpers/envVariables';

export type GitContributes = {
  contributionDays: Array<{
    color: string,
    date: string,
    contributionCount: number
  }>,
  firstDay: string,
};

export const getContributions = async (user: string): Promise<GitContributes[]> => {
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${githubPersonalAccessToken}`);
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    query: `query {user(login: "${user}") {name contributionsCollection { contributionCalendar { colors totalContributions weeks { firstDay contributionDays { color contributionCount date } firstDay } } } }}`,
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  };

  const response = await fetch('https://api.github.com/graphql', requestOptions);
  const { data } = JSON.parse(await response.text());

  return data.user.contributionsCollection.contributionCalendar.weeks;
};
