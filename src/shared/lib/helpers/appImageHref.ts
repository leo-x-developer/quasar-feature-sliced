import { bakeryUrl } from '@shared/api/bakery';
import { Image } from '@shared/types';

const appImageHref = (url:Image):Image => `${bakeryUrl}${url}`

export default appImageHref
