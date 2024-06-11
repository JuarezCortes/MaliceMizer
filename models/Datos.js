class Datos {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    grupos,
    steps

  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.grupos = grupos;
    this.steps = steps;
    this.duration = duration;
    this.complexity = complexity
    this.affordability = affordability;

  }
}

export default Datos;
