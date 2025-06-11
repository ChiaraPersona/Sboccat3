<script>
	export let title;
	export let description;
	export let image;
</script>

<div class="card">
	<img src={image} alt={title} />
	<div class="card-content">
		<h3>{title}</h3>
		<p>{description}</p>
	</div>
</div>

<style>
	.card {
		background-color: #fff;
		border-radius: 12px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		overflow: hidden;
		transition: transform 0.2s ease;
	}

	.card:hover {
		transform: scale(1.02);
	}

	.card img {
		width: 100%;
		height: auto;
		display: block;
	}

	.card-content {
		padding: 16px;
	}

	.card-content h3 {
		margin: 0 0 8px;
		font-size: 1.2rem;
		color: #222;
	}

	.card-content p {
		margin: 0;
		font-size: 0.95rem;
		color: #555;
	}
</style>
