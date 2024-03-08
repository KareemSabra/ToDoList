const RegisterComponent = () => {
  return (
    <div class="center-wrap">
      <div class="section text-center">
        <h4 class="mb-3 pb-3">Sign Up</h4>
        <div class="form-group">
          <input type="text" class="form-style" placeholder="Username" />
        </div>
        <div class="form-group mt-2">
          <input type="tel" class="form-style" placeholder="Password" />
        </div>

        <a class="btn mt-4">Register</a>
      </div>
    </div>
  );
};
export default RegisterComponent;
