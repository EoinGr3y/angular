export class LikeComponent {
  private isSelected: boolean;

  constructor(private numberOfLikes: number) {
      this.isSelected = false;
  }

  toggleLike() {
    this.isSelected = !this.isSelected;
    this.numberOfLikes += (this.isSelected) ? 1 : -1;
  }

  get _numberOfLikes() {
    return this.numberOfLikes;
  }

  get _isSelected() {
    return this.isSelected;
  }
}
