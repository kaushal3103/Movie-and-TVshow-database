import styled from 'styled-components';

export const Wrapper = styled.div`
background: linear-gradient(
    to bottom, rgba(0,0,0,0) 41%,
    
    rgba(0,0,0,0.7) 100%
),
url(${({image}) => image}),black;
background-position:center;
background-size: 100%,cover;
height: 400px;
position:relative;
animation: animateHeroImage 1s;
:hover {
    opacity:0.8;
}
@keyframes animateHeroImage {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }

}
`;

