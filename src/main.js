import "./style.css"
import "./script.js"

document.querySelector("#app").innerHTML = `
    <div class="layout-grid" id="preview">
        <div class="cards">
            <div class="card card-elevation">
                <div class="card-body">
                    <h2 class="headline">Calculator</h2>
                    <div class="form-group">
                        <div class="flex gap-16">
                            <input type="number" class="form-size-lg" placeholder="A" name="numA" id="numA" style="width: 100%">
                            <input type="number" class="form-size-lg" placeholder="B" name="numB" id="numB" style="width: 100%">
                        </div>
                        <div class="flex gap-16">
                            <input type="number" class="form-size-lg" placeholder="C" name="numC" id="numC" style="width: 100%">
                            <input type="number" class="form-size-lg" placeholder="Result (X)" name="result" id="result" style="width: 100%" readonly>
                        </div>
                    </div>
                    <div class="card-actions">
                        <button class="btn btn-primary btn-md" id="btn-calcular" style="width: 100%;">Calculate</button>
                    </div>
                </div>
            </div>
            <div class="card card-elevation">
                <div class="card-body">
                    <h2 class="headline">Ratio</h2>
                    <p class="margin-b-8">The values below are proportions and quantities for making specialty coffee.</p>
                    <p>[15:1] 100 equivalent to 6.67</p>
                    <p>[15:1] 150 equivalent to 10</p>
                    <p>[15:1] 200 equivalent to 13.33</p>
                    <p>[15:1] 250 equivalent to 16.67</p>
                    <p>[15:1] 400 equivalent to 26.67</p>
                </div>
            </div>
        </div>
        <div class="result-text">
            <div class="result-section">
                <h1 class="display">What is cross multiplication?</h2>
                <p class="body-lg">Cross multiplication is a simple technique to solve proportion problems by multiplying across the diagonal and dividing, that is, X = (B × C) ÷ A.</p>
                <p class="body-lg">For example, if 2 t-shirts cost 40, how much do 5 cost? The solution is X = (40 × 5) ÷ 2, which means 5 t-shirts cost 100.</p>
            </div>
        </div>
    </div>
`
