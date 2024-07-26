import './userRegister.style.css'
import { CountrySelect } from './countrySelect/countrySelect.component'
import { Button } from '@mui/material'
import { AiOutlineCheck } from "react-icons/ai";
import { UserName } from './userName/userName.component';
import { UserLenguage } from './userLenguage/userLenguage';
import { UserGender } from './userGender/userGender';
import { UserBirthdate } from './birthDate/birthDate';
import '../../../config/i18next.config'



export const UserRegister = () => {
    return (
        <div className='user-register border-solid border-2 border-black rounded-3xl'>
                <h2 className='mt-4 mb-4 ml-4'>Welcome!</h2>
                <UserName/>
                <UserBirthdate/>
                <CountrySelect/>
                <UserLenguage/>
                <UserGender/>
                <Button variant="contained" endIcon={<AiOutlineCheck />} className='mb-4 ml-4'>Ready</Button>
        </div>
    )
}