import { regex } from '../../components/common/utill/regex';
export function isValidDeatils(data) {
    const isValidOneFieldRequired = regex.email.test(data.email) || regex.isNotEmpty.test(data.phone);
    return {
        isValidOneFieldRequired,

        isAllValid: isValidOneFieldRequired
    }
}