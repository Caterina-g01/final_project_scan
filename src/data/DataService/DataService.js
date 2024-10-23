const BASE_URL = 'https://gateway.scan-interfax.ru/api/v1';

export const fetchHistogramData = async (searchParams) => {
  console.log('Запрос к gистограмме с параметрами:', searchParams);
  
  try {
    const response = await fetch(`${BASE_URL}/objectsearch/histograms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ${accessToken}', 
      },
      body: JSON.stringify(searchParams),
    });

    if (!response.ok) {
      throw new Error(`Ошибка при запросе сводки. Статус: ${response.status}`);
    }

    const data = await response.json();
    console.log('Данные гистограммы получены:', data);
    return data;

  } catch (error) {
    console.error('Ошибка при получении данных гистограммы:', error);
    throw error; 
  }
};

export const fetchPublicationIds = async (searchParams) => {
  console.log('Запрос к публикациям с параметрами:', searchParams);
  
  try {
    const response = await fetch(`${BASE_URL}/objectsearch`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ${accessToken}', 
      },
      body: JSON.stringify(searchParams),
    });

    if (!response.ok) {
      throw new Error(`Ошибка при запросе публикаций. Статус: ${response.status}`);
    }

    const data = await response.json();
    console.log('ID публикаций получены:', data);
    return data;

  } catch (error) {
    console.error('Ошибка при получении ID публикаций:', error);
    throw error; 
  }
};

export const fetchDocumentDetails = async (documentIds) => {
  console.log('Запрос к документам с ID:', documentIds);
  
  try {
    const response = await fetch(`${BASE_URL}/documents`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ${accessToken}', 
      },
      body: JSON.stringify({
        ids: documentIds,
      }),
    });

    if (!response.ok) {
      throw new Error(`Ошибка при запросе содержимого документов. Статус: ${response.status}`);
    }

    const data = await response.json();
    console.log('Содержимое документов получено:', data);
    return data;

  } catch (error) {
    console.error('Ошибка при получении содержимого документов:', error);
    throw error; 
  }
};
