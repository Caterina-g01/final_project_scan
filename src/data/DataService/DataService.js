// /src/services/dataService.js

const BASE_URL = 'https://gateway.scan-interfax.ru/api/v1';

// Функция для запроса сводки
export const fetchHistogramData = async (searchParams) => {
  const response = await fetch(`${BASE_URL}/objectsearch/histograms`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_TOKEN',  // добавь токен
    },
    body: JSON.stringify(searchParams),
  });

  if (!response.ok) {
    throw new Error('Ошибка при запросе сводки.');
  }

  return await response.json();
};

// Функция для получения ID публикаций
export const fetchPublicationIds = async (searchParams) => {
  const response = await fetch(`${BASE_URL}/objectsearch`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_TOKEN',
    },
    body: JSON.stringify(searchParams),
  });

  if (!response.ok) {
    throw new Error('Ошибка при запросе публикаций.');
  }

  return await response.json();
};

// Функция для получения подробностей публикаций
export const fetchDocumentDetails = async (documentIds) => {
  const response = await fetch(`${BASE_URL}/documents`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_TOKEN',
    },
    body: JSON.stringify({
      ids: documentIds
    }),
  });

  if (!response.ok) {
    throw new Error('Ошибка при запросе содержимого документов.');
  }

  return await response.json();
};
