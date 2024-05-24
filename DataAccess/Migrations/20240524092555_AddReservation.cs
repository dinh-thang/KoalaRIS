using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class AddReservation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Item_Cart_CartId",
                table: "Item");

            migrationBuilder.DropColumn(
                name: "CartID",
                table: "Item");

            migrationBuilder.RenameColumn(
                name: "CartId",
                table: "Item",
                newName: "CartID");

            migrationBuilder.RenameIndex(
                name: "IX_Item_CartId",
                table: "Item",
                newName: "IX_Item_CartID");

            migrationBuilder.AddForeignKey(
                name: "FK_Item_Cart_CartID",
                table: "Item",
                column: "CartID",
                principalTable: "Cart",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Item_Cart_CartID",
                table: "Item");

            migrationBuilder.RenameColumn(
                name: "CartID",
                table: "Item",
                newName: "CartId");

            migrationBuilder.RenameIndex(
                name: "IX_Item_CartID",
                table: "Item",
                newName: "IX_Item_CartId");

            migrationBuilder.AddColumn<int>(
                name: "CartID",
                table: "Item",
                type: "int",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Item_Cart_CartId",
                table: "Item",
                column: "CartId",
                principalTable: "Cart",
                principalColumn: "Id");
        }
    }
}
