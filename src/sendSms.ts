import axios, { AxiosResponse } from 'axios';

// Define the types for the login response
interface LoginResponse {
  data: {
    token: string;
  };
}

// Define the types for the SMS send response
interface SmsResponse {
  status: string;
  message: string;
}

export async function sendSms(
  phone: string,
  text: string,
): Promise<SmsResponse> {
  try {
    const login: AxiosResponse<LoginResponse> = await axios.post(
      'https://notify.eskiz.uz/api/auth/login',
      {
        email: 'fovoltvo@gmail.com',
        password: 'bobur123',
      },
    );

    const token: string = login.data.data.token;

    const response: AxiosResponse<SmsResponse> = await axios.post(
      'https://notify.eskiz.uz/api/message/sms/send',
      {
        mobile_phone: phone,
        message: text,
        from: '4546',
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    return response.data;
  } catch (err: unknown) {
    const error = err as { response?: { data?: unknown } };
    console.error('SMS yuborishda xatolik:', error.response?.data || error);
    throw new Error();
  }
}
