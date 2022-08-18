import axios from 'axios';

axios.defaults.baseURL = 'http://poky';

export async function getPokyId() {
  const { data } = await axios.get();
}
export async function getPokyName() {
  const { data } = await axios.get();
}
