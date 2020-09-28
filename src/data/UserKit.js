const ROOT_URL = "https://frebi.willandskill.eu/"

export default class {
  async register(data) {
    const url = `${ROOT_URL}auth/users/`
    return fetch(url, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(data)
    })
  }

  async activateUser(uid, token) {
    const url = `${ROOT_URL}auth/users/activate/`
    const payload = { uid, token }
    return fetch(url, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(payload)
    })
  }

  async login(data) {
    const url = `${ROOT_URL}/api-token-auth/`
    // const payload = { data }
    return fetch(url, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(data)
    })
  }

  async getCustomerList() {
    const url = `${ROOT_URL}/api/v1/customers`
    return fetch(url, {
      headers: this.getPrivateHeaders()
    })
  }

  async createCustomer(data) {
    const url = `${ROOT_URL}/api/v1/customers`
    return fetch(url, {
      method: "POST",
      headers: this.getPrivateHeaders(),
      body: JSON.stringify(data)
    })
  }

  async getMe() {
    const url = `${ROOT_URL}/api/v1/me`
    return fetch(url, {
      headers: this.getPrivateHeaders()
    })
  }

  async getDetail(id) {
    const url = `${ROOT_URL}/api/v1/customers/${id}/`
    return fetch(url, {
      headers: this.getPrivateHeaders()
    })
  }

  async editCustomerDetail({ id, data }) {
    const url = `${ROOT_URL}/api/v1/customers/${id}/`
    return fetch(url, {
      method: "PATCH",
      headers: this.getPrivateHeaders(),
      body: JSON.stringify(data)
    })
  }

  async deleteCustomer({ id, data }) {
    const url = `${ROOT_URL}/api/v1/customers/${id}/`
    return fetch(url, {
      method: "DELETE",
      headers: this.getPrivateHeaders()
      // body: JSON.stringify(data)
    })
  }

  setToken(token) {
    localStorage.setItem("BUSINESS_TOKEN", token)
  }

  getToken() {
    return localStorage.getItem("BUSINESS_TOKEN")
  }

  getPublicHeaders() {
    return {
      "Content-Type": "application/json"
    }
  }

  getPrivateHeaders() {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.getToken()}`
    }
  }
}
