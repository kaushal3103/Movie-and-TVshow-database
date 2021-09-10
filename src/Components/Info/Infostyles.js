
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';
import styled from 'styled-components';
export const Wrapper = styled.div`

background: ${({backdrop}) => 
backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})`
:'#000'
};
background-size: cover;
background-position: center;
padding: 40px 20px;
animation: animateMovieInfo 1s;

@keyframes {
    from{
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
`;

