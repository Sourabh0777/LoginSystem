import styled from 'styled-components';

export const UserSectionn = styled.div`
display: flex;
flex-direction: column;
margin: 20px;
flex: 0.8;
.heading{
    display: flex;
    list-style: none;
    gap: 320px;
    font-size: 18px;
    border-bottom: 1px solid black;

}
.table_container{
}
.userdata{
 display: grid;
 grid-template-rows: auto auto auto auto; 
}

.userdata_ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items:flex-start;
    height: max-content;


    /* border: 1px solid black; */
    li{
        flex: 0.2; 
    }
}

`;