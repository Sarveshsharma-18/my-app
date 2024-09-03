// src/api.js
import axios from 'axios';

const API_URL = 'https://prod.api.greentiger.in/api/v1/dashboard_kpis';
const TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFRva2VuIjoiN2E5YjBlN2ZiMWY0M2MxMDhiZDMxMzI5ZjMwYzljN2JmZmUwZmZiMTMwNDkxNTgyNjRkYzlkMTdjZGIwMTRlYSIsImNsaWVudElkIjozMSwiaWF0IjoxNzI1MzQ0OTkyLCJleHAiOjE3MjU5NDk3OTJ9.hrfD8ySLnGWzKWpirnuTvOjsrOR9mBbd1yfXO_s65lwIZCk7_Ybtte6Cy8YFH6irM4VBCvQFoUGKDQeGhQ11pYeCNC6KmU6AhPhq2bl4bF_TMGOOW5Rj1sLjFRucg_k-bU8AYkYnPH4vrZnRJzfEIETajLL-WSFGonVX2F2yA4VUW_qDeRbVn2eXEXh40VbRy_jwqFj07H-orNU_aKmRc1mg4r3taiBWuCiSffOFbqYiN9g1IWv4aAfK5R73oMNTQIlySTpO8dZYRopmP_9FRWYIUeqVQahE3O4IWDnthIju3zfSkEMk_R0xnV4Iup820J1-wfiKCW8O1zYDOzRdNA';

export const fetchDashboardKPIs = async () => {
  try {
    const response = await axios.post(
      API_URL,
      {
        cumulative: 1,
        clientId: 31,
        type: 'LOGIN',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
