const loginRequest= (provider, password) => {
  return (
      fetch(`https://api.lleida.net/admin/v2/?provider=${provider}&password=${password}&request=list`, 
      {method: 'POST'}).then(res => res.json())
  );
};

export default loginRequest;
