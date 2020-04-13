import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { $gray600, $gray700 } from '../../styles/variables';

export const Container = styled.div`
`;

export const useStyles = makeStyles(() => ({
  result: {
    paddingLeft: '2rem',
    paddingRight: '2rem',
    fontSize: '1rem',
    textAlign: "center",
    letterSpacing: "0.1em"
  },
  resultLabel: {
    color: $gray600,
    marginTop: '3rem',
    fontFamily: "Prompt",
    fontWeight: "normal"
  },
  resultBtn: {
    fontFamily: "Prompt",
    marginTop: '0.2rem',
  },
  resultFooter: {
    fontSize: '12px',
    lineHeight: '17px',
    textAlign: 'center',
    marginBottom: '30px',
    color: $gray700,
  },
}));
