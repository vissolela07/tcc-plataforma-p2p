const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

async function fazerPedido(caminho, opcoes = {}) {
  const token = localStorage.getItem('token')
  
  const cabecalhos = {
    ...opcoes.headers,
  }

  if (!(opcoes.body instanceof FormData)) {
    cabecalhos['Content-Type'] = 'application/json'
  }

  if (token) {
    cabecalhos['Authorization'] = `Bearer ${token}`
  }
  const resposta = await fetch(`${API_URL}${caminho}`, {
    ...opcoes,
    headers: cabecalhos,
  })

  if (resposta.status === 204) {
    return null
  }

  const dados = await resposta.json().catch(() => null)

  if (!resposta.ok) {
    if (resposta.status === 401) {
      localStorage.removeItem('token')
      localStorage.removeItem('utilizador')
      window.location.href = '/login'
    }
    throw new Error(dados?.erro || 'Ocorreu um erro no servidor.')
  }

  return dados
}

export const api = {
  get: (caminho) => fazerPedido(caminho, { method: 'GET' }),
  
  post: (caminho, corpo) => fazerPedido(caminho, {
    method: 'POST',
    body: JSON.stringify(corpo),
  }),
  
  put: (caminho, corpo) => fazerPedido(caminho, {
    method: 'PUT',
    body: JSON.stringify(corpo),
  }),
  
  patch: (caminho, corpo) => fazerPedido(caminho, {
    method: 'PATCH',
    body: JSON.stringify(corpo),
  }),
  
  delete: (caminho) => fazerPedido(caminho, {
    method: 'DELETE',
  }),

  enviar: (caminho, formData) => fazerPedido(caminho, {
    method: 'POST',
    body: formData,
  }),
}