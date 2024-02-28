import type { DataProvider } from "@refinedev/core";

const API_URL = "http://localhost:8000";

const fetcher = async (url: string, options?: RequestInit) => {
    return fetch(url, {
      ...options,
      headers: {
        ...options?.headers,
        Authorization: localStorage.getItem("my_access_token"),
      },
    });
  };

export const dataProvider: DataProvider = {
    getApiUrl: () => API_URL,
    create: async ({ resource, variables }) => {
        const response = await fetcher(`${API_URL}/${resource}/createUser`, {
          method: "POST",
          body: JSON.stringify(variables),
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        if (response.status < 200 || response.status > 299) throw response;
    
        const data = await response.json();
    
        return { data };
    },

    getOne: async ({ resource, id, meta }) => {
        const response = await fetcher(`${API_URL}/${resource}/user/${id}`);
    
        if (response.status < 200 || response.status > 299) throw response;
    
        const data = await response.json();
    
        return { data };
      },

    update: async ({ resource, id, variables }) => {
        const response = await fetcher(`${API_URL}/${resource}/user/${id}`, {
          method: "POST",
          body: JSON.stringify(variables),
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        if (response.status < 200 || response.status > 299) throw response;
    
        const data = await response.json();
    
        return { data };
      },

    getList: async ({ resource, pagination, filters, sorters, meta }) => {
        const params = new URLSearchParams();

        if (pagination) {
            params.append("_start", (pagination.current - 1) * pagination.pageSize);
            params.append("_end", pagination.current * pagination.pageSize);
        }

        if (sorters && sorters.length > 0) {
            params.append("_sort", sorters.map((sorter) => sorter.field).join(","));
            params.append("_order", sorters.map((sorter) => sorter.order).join(","));
        }

        if (filters && filters.length > 0) {
            filters.forEach((filter) => {
              if ("field" in filter && filter.operator === "eq") {
                // Our fake API supports "eq" operator by simply appending the field name and value to the query string.
                params.append(filter.field, filter.value);
              }
            });
          }

        const response = await fetcher(`${API_URL}/${resource}/list/offset/0/limit/${pagination.pageSize}?${params.toString()}`);

        if (response.status < 200 || response.status > 299) throw response;

        const dataRaw = await response.json();
        const data = dataRaw.items;
        
        console.log(data);

        return {
            data
        };
    },
    
    deleteOne: () => { throw new Error("Not implemented"); },

    // Optional methods:
    // getMany: () => { /* ... */ },
    // createMany: () => { /* ... */ },
    // deleteMany: () => { /* ... */ },
    // updateMany: () => { /* ... */ },
    // custom: () => { /* ... */ },
}