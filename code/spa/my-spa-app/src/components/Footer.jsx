function Footer(){
    return (
    <>
    <footer>
    <div>
  <label class="flex">
    <input type="checkbox" name="accept" value="accept" id="accept"> Checkbox
  </label>
</div>

<div class="flex">
  <label class="flex">
    <input type="radio" name="option" value="1" id="radio1"> Option 1
  </label>
  <label class="flex">
    <input type="radio" name="option" value="2" id="radio2"> Option 2
  </label>
</div>
</footer>
</>
    );
  }

  export default Footer;