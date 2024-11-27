<body>
        <h1>Subscribe for more features!</h1>
        <h2>Cancel anytime you want, no string attached!</h2>

        <div class="grid md:grid-cols-2 gap-8">
                <div class="option-container">
                        <h2 style="font-weight: bold;">Monthly Plan</h2>
                        <p>Pay at the begining of each calendar month. Perfect if you just need that final little assistance.</p>
                        <h2>CAD 5.99 per month</h2>
                        <button>Choose Plan</button>
                </div>
                <div class="option-container">
                        <h2 style="font-weight: bold;">Yearly Plan</h2>
                        <p>Pay once for 12-months access. Save the hassles and 15% cheaper than subscribing to
                                the monthly plan in the same amount of time!
                        </p>
                        <h2>CAD 49.99 per year</h2>
                        <button>Choose Plan</button>
                </div>
        </div>
</body>

<style>
        h1 {
		font-size: 2.5rem; /* Bigger h1 size */
		text-align: center;
		margin-bottom: 1rem;
		font-weight: bold;
		color: rgb(30 58 138);
		font-family: 'Poppins', sans-serif;
	}

        h2 {
		font-size: 1.5rem; /* Bigger h1 size */
		text-align: center;
		margin-bottom: 1rem;
		color: rgb(30 58 138);
		font-family: 'Poppins', sans-serif;
	}

        p {
                color: rgb(75 85 99);
                text-align: center;
                margin-bottom: 1rem;
        }

        .option-container {
		border: 1px solid rgb(243 244 246);
		padding: 1.5rem;
		border-radius: 10px;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		/* Add space between p and form */
		margin-top: 3rem; 
                align-items: center;
                display: flex;
                flex-direction: column;
	}

        button {
		padding: 0.75rem;
		background-color: rgb(30 58 138);
		color: white;
		border: none;
		cursor: pointer;
		font-size: 1rem;
		border-radius: 10px;
                
	}

	button:hover {
		background-color: #0056b3;
		transform: translateY(-2px);
	}
</style>