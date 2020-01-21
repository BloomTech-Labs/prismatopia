export $(grep -v '^#' .env | xargs -0)

TODO: Echo variable as they're loaded