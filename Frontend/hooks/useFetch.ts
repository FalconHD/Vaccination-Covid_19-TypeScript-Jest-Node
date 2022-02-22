const EndPoint = "http://localhost:5000";

export const get = async (url: string, token?: string) => {
  url = EndPoint + url;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
};
export const Delete = async (url: string, token?: string) => {
  url = EndPoint + url;
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
};

export const post = async (url: string, body: object, token?: string) => {
  url = EndPoint + url;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await response.json();
};

export const put = async (url: string, body: string, token?: string) => {
  url = EndPoint + url;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
  return await response.json();
};

export const patch = async (url: string, body: string) => {
  url = EndPoint + url;
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await response.json();
};
