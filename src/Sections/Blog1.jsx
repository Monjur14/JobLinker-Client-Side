
const Blog1 = () => {
  return (
    <div className="contain">
        <img src="jwt-main.png" alt="" className="w-full h-[300px] object-cover" />
        <div className="px-2 md:px-3 lg:px-0">
            <h1 className="text-2xl font-semibold my-4">What is an access token and refresh token? How do they work and where should we store them on the client side?</h1>
            <div className="text-lg">
      <h2>Understanding Access Tokens and Refresh Tokens in Authentication</h2>

      <h3>Access Token:</h3>
      <p><strong>Purpose:</strong> An access token is a credential used by a client to access protected resources on behalf of a user.</p>
      <p><strong>Usage:</strong> It is sent with each request to the server to access protected resources.</p>
      <p><strong>Lifespan:</strong> Access tokens have a limited lifespan, typically ranging from a few minutes to several hours.</p>
      <p><strong>Expiration:</strong> Once expired, they become invalid and can no longer be used to access resources.</p>
      <p><strong>Security:</strong> They are short-lived and are used to provide secure access to resources without requiring the user's credentials with each request.</p>

      <h3>Refresh Token:</h3>
      <p><strong>Purpose:</strong> A refresh token is a credential used to obtain a new access token when the current access token expires.</p>
      <p><strong>Usage:</strong> It is sent to the server to request a new access token.</p>
      <p><strong>Lifespan:</strong> Refresh tokens have a longer lifespan compared to access tokens, often measured in days or weeks.</p>
      <p><strong>Expiration:</strong> Once expired or used, they become invalid.</p>
      <p><strong>Security:</strong> They are long-lived and provide a way to maintain user sessions without needing the user to re-authenticate frequently.</p>

      <h3>How They Work:</h3>
      <ol>
        <li>
          <strong>Initial Authentication:</strong>
          <ul>
            <li>When a user logs in or authenticates, the server issues both an access token and a refresh token.</li>
            <li>The access token is used to access protected resources, and the refresh token is stored securely on the client side.</li>
          </ul>
        </li>
        <li>
          <strong>Access Token Usage:</strong>
          <ul>
            <li>The client includes the access token in the Authorization header or as a query parameter with each request to the server.</li>
            <li>The server validates the access token and grants access to the requested resource if the token is valid.</li>
          </ul>
        </li>
        <li>
          <strong>Access Token Expiry:</strong>
          <ul>
            <li>Access tokens have a limited lifespan. Once expired, the client needs to obtain a new access token.</li>
          </ul>
        </li>
        <li>
          <strong>Refresh Token Usage:</strong>
          <ul>
            <li>When the access token expires, the client sends the refresh token to the server.</li>
            <li>The server validates the refresh token and issues a new access token if the refresh token is valid.</li>
            <li>The server may also issue a new refresh token along with the new access token, or it may invalidate the old refresh token.</li>
          </ul>
        </li>
      </ol>

      <h3>Storage on the Client Side:</h3>
      <ul>
        <li><strong>Access Token:</strong> Store access tokens in memory or in secure storage mechanisms like HTTP-only cookies or Web Storage (localStorage or sessionStorage). Using HTTP-only cookies helps mitigate XSS attacks.</li>
        <li><strong>Refresh Token:</strong> Store refresh tokens in secure HTTP-only cookies. This prevents them from being accessed by JavaScript and reduces the risk of CSRF attacks.</li>
        <li><strong>Security:</strong> It's crucial to store tokens securely to prevent unauthorized access or theft. Always use HTTPS to transmit tokens and employ best practices for securing client-side storage.</li>
      </ul>

      <p>By managing access and refresh tokens appropriately, applications can maintain secure user sessions and access to protected resources.</p>
    </div>
        </div>
    </div>
  )
}

export default Blog1
